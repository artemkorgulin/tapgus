#!/bin/sh

set -e
set +u
set -o nounset

deploy_challenge() {
    local DOMAIN="${1}" TOKEN_FILENAME="${2}" TOKEN_VALUE="${3}"
    # printf "deploy_challenge stage:\r\n";
    echo "${TOKEN_VALUE}" >> "/etc/resty-auto-ssl/letsencrypt/.acme-challenges/${TOKEN_FILENAME}" \
    && chmod 0777 "/etc/resty-auto-ssl/letsencrypt/.acme-challenges/${TOKEN_FILENAME}"
    # This hook is called once for every domain that needs to be
    # validated, including any alternative names you may have listed.
    #
    # Parameters:
    # - DOMAIN
    #   The domain name (CN or subject alternative name) being
    #   validated.
    # - TOKEN_FILENAME
    #   The name of the file containing the token to be served for HTTP
    #   validation. Should be served by your web server as
    #   /.well-known/acme-challenge/${TOKEN_FILENAME}.
    # - TOKEN_VALUE
    #   The token value that needs to be served for validation. For DNS
    #   validation, this is what you want to put in the _acme-challenge
    #   TXT record. For HTTP validation it is the value that is expected
    #   be found in the $TOKEN_FILENAME file.
}

clean_challenge() {
    local DOMAIN="${1}" TOKEN_FILENAME="${2}" TOKEN_VALUE="${3}"
    rm -r "/etc/resty-auto-ssl/letsencrypt/.acme-challenges/*"
    # printf "clean_challenge stage:\r\n";
    # This hook is called after attempting to validate each domain,
    # whether or not validation was successful. Here you can delete
    # files or DNS records that are no longer needed.
    #
    # The parameters are the same as for deploy_challenge.
}

deploy_cert() {
    local DOMAIN="${1}" KEYFILE="${2}" CERTFILE="${3}" FULLCHAINFILE="${4}" CHAINFILE="${5}" TIMESTAMP="${6}"
    # printf "deploy_cert stage:\r\n";
    # This hook is called once for each certificate that has been
    # produced. Here you might, for instance, copy your new certificates
    # to service-specific locations and reload the service.
    #
    # Parameters:
    # - DOMAIN
    #   The primary domain name, i.e. the certificate common
    #   name (CN).
    # - KEYFILE
    #   The path of the file containing the private key.
    # - CERTFILE
    #   The path of the file containing the signed certificate.
    # - FULLCHAINFILE
    #   The path of the file containing the full certificate chain.
    # - CHAINFILE
    #   The path of the file containing the intermediate certificate(s).
    # - TIMESTAMP
    #   Timestamp when the specified certificate was created.
}

unchanged_cert() {
    local DOMAIN="${1}" KEYFILE="${2}" CERTFILE="${3}" FULLCHAINFILE="${4}" CHAINFILE="${5}"
    # printf "unchanged_cert stage:\r\n";
    # This hook is called once for each certificate that is still
    # valid and therefore wasn't reissued.
    #
    # Parameters:
    # - DOMAIN
    #   The primary domain name, i.e. the certificate common
    #   name (CN).
    # - KEYFILE
    #   The path of the file containing the private key.
    # - CERTFILE
    #   The path of the file containing the signed certificate.
    # - FULLCHAINFILE
    #   The path of the file containing the full certificate chain.
    # - CHAINFILE
    #   The path of the file containing the intermediate certificate(s).
}

invalid_challenge() {
    local DOMAIN="${1}" RESPONSE="${2}"
    # printf "invalid_challenge stage:\r\n";
    # This hook is called if the challenge response has failed, so domain
    # owners can be aware and act accordingly.
    #
    # Parameters:
    # - DOMAIN
    #   The primary domain name, i.e. the certificate common
    #   name (CN).
    # - RESPONSE
    #   The response that the verification server returned
}

request_failure() {
    local STATUSCODE="${1}" REASON="${2}" REQTYPE="${3}"
    # printf "request_failure stage:\r\n";
    # This hook is called when a HTTP request fails (e.g., when the ACME
    # server is busy, returns an error, etc). It will be called upon any
    # response code that does not start with '2'. Useful to alert admins
    # about problems with requests.
    #
    # Parameters:
    # - STATUSCODE
    #   The HTML status code that originated the error.
    # - REASON
    #   The specified reason for the error.
    # - REQTYPE
    #   The kind of request that was made (GET, POST...)
}

exit_hook() {
  # printf "exit_hook stage:\r\n";
  # This hook is called at the end of a dehydrated command and can be used
  # to do some final (cleanup or other) tasks.
  :
}

if [ $# -ge 1 ] && [ -n "$1" ]; then
  HANDLER="$1"; shift
  if [[ "${HANDLER}" = "deploy_challenge" ]]; then
    "$HANDLER" "$@"
  fi
  if [[ "${HANDLER}" = "clean_challenge" ]]; then
    "$HANDLER" "$@"
  fi
  if [[ "${HANDLER}" = "deploy_cert" ]]; then
    "$HANDLER" "$@"
  fi
  if [[ "${HANDLER}" = "unchanged_cert" ]]; then
    "$HANDLER" "$@"
  fi
  if [[ "${HANDLER}" = "invalid_challenge" ]]; then
    "$HANDLER" "$@"
  fi
  if [[ "${HANDLER}" = "request_failure" ]]; then
    "$HANDLER" "$@"
  fi
  if [[ "${HANDLER}" = "exit_hook" ]]; then
    "$HANDLER" "$@"
  fi
fi