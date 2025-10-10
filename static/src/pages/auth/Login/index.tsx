import { useState } from 'react';
import { apiV2 } from 'api';
import type { TLoginReq } from 'api/api.v2.types';
import { I18N } from 'lib/i18n/text';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, useFormState } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { catchHandler } from 'utils/helpers/api';
import type { TComponent } from 'utils/types/elements';

import { ButtonWithCorners } from 'components/uiKit/ButtonWithCorners';
import { ErrorMessage, FieldControl } from 'components/uiKit/FormFieldControl';
import { Input } from 'components/uiKit/Input';
import { Spinner } from 'components/uiKit/Spinner';
import { ToggleBox } from 'components/uiKit/Togglebox';
import {ROUTES} from "../../../utils/constants/routes";

// todo: research i18n correct usage in
const required = I18N.FORM_REQUIRED;

const LoginPage: TComponent = () => {
    const navigate = useNavigate();
    const [resErrorMessage, setResErrorMessage] = useState<string>('');

    const { register, handleSubmit, control } = useForm<TLoginReq>();
    const { errors, isSubmitting } = useFormState<TLoginReq>({ control });

    const onSubmit: SubmitHandler<TLoginReq> = async (data) => {
        return await apiV2.auth
            .logIn(data)
            .then(() => navigate(`${ROUTES.TAPGUSS}`))
            .catch(catchHandler(setResErrorMessage));
    };

    return (
        <div className='flex flex-col gap-2'>
            {resErrorMessage ? <ErrorMessage error={resErrorMessage} /> : null}
            <form
                className='flex flex-col gap-4'
                onSubmit={handleSubmit(onSubmit)}
            >
                <FieldControl error={errors?.login?.message}>
                    <Input
                        placeholder='Username'
                        type='text'
                        {...register('login', { required })}
                    />
                </FieldControl>
                <FieldControl error={errors?.password?.message}>
                    <Input
                        placeholder='Password'
                        type='password'
                        {...register('password', { required })}
                    />
                </FieldControl>
                <FieldControl>
                    <ToggleBox
                        type='checkbox'
                        label='save password'
                        value='true'
                        {...register('remember')}
                    />
                </FieldControl>
                <ButtonWithCorners
                    type='submit'
                    rightElement={
                        <Spinner
                            size='xs'
                            variant='dots'
                            isHidden={!isSubmitting}
                        />
                    }
                    rightElementClassName='w-0'
                    disabled={isSubmitting}
                >
                    Sign In
                </ButtonWithCorners>
            </form>
        </div>
    );
};

export default LoginPage;
