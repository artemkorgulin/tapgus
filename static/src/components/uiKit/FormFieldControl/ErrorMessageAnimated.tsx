import { AnimatePresence, motion } from 'framer-motion';
import type { TComponent } from 'utils/types/elements';

import { ErrorMessage } from './ErrorMessage';
import css from './style.module.scss';

type ErrorMessageAnimatedProps = { error?: string };

// todo: use m.div https://www.framer.com/motion/guide-reduce-bundle-size/
export const ErrorMessageAnimated: TComponent<ErrorMessageAnimatedProps> = ({
    error,
}) => (
    <AnimatePresence>
        {error ? (
            <motion.div
                className={css.animated_error_message}
                initial={{ height: 0, marginTop: 0 }}
                exit={{ height: 0, marginTop: 0 }}
                animate={{
                    height: 'calc(.813rem + .5rem)',
                    marginTop: '.5rem',
                }}
            >
                <ErrorMessage error={error} />
            </motion.div>
        ) : null}
    </AnimatePresence>
);
