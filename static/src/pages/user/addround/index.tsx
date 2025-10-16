import { TComponent } from 'utils/types/elements';
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {SubmitHandler, useForm, useFormState} from "react-hook-form";
import {TRoundAddReq} from "api/api.v2.types";
import {apiV2} from "api";
import {catchHandler} from "utils/helpers/api";
import {ButtonWithCorners} from "components/uiKit/ButtonWithCorners";
import {Spinner} from "components/uiKit/Spinner";
import css from './style.module.scss';
import { ROUTES } from 'utils/constants/routes';
import { getSessionStorageOrDefault } from 'utils/hooks/useSession';
import { getAuth } from 'utils/helpers/auth';
import { ErrorMessage, FieldControl } from 'components/uiKit/FormFieldControl';
import { Input } from 'components/uiKit/Input';
import { I18N } from 'lib/i18n/text';

const required = I18N.FORM_REQUIRED;

const AddRound: TComponent = () => {
    const navigate = useNavigate();
    const [resErrorMessage, setResErrorMessage] = useState<string>('');
    const [CheckRole, setCheckRole] = useState(false);

    const { register, handleSubmit, control } = useForm<TRoundAddReq>();
    const { errors, isSubmitting } = useFormState<TRoundAddReq>({ control });
    const userName = getSessionStorageOrDefault("userUserName","");
    const userId = getSessionStorageOrDefault("userId","");

    useEffect(() => {
        const checkAdmin = async () => {
            await apiV2.user
                .checkRole({token: getAuth()})
                .then((data: any) => {
                    if(data.data.id) {
                        setCheckRole(true);
                    } else {
                        setCheckRole(false);
                    }
                })
                .catch(catchHandler(setResErrorMessage));
        };
        checkAdmin();
    }, []);

    const onSubmit: SubmitHandler<TRoundAddReq> = async (data) => {
        data.round_user = userId;
        return await apiV2.rounds
            .addRound(data)
            .then(() => navigate(ROUTES.GAMER))
            .catch(catchHandler(setResErrorMessage));
    };

    if(CheckRole) {
        return (
            <div className='flex flex-col gap-2'>
                {resErrorMessage ? "" : null}
                <div className={css.header}>
                    <h2 className={css.title}>Добавить раунд:</h2>
                    <span className={css.title}>{userName}</span>
                </div>
                <div className={css.wrapper_add_from}>
                    {resErrorMessage ? <ErrorMessage error={resErrorMessage} /> : null}
                    <form
                        className='flex flex-col gap-4'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <FieldControl error={errors?.round_active?.message}>
                            <Input
                                placeholder='Активность раунда'
                                type='text'
                                {...register('round_active', { required })}
                            />
                        </FieldControl>
                        <FieldControl error={errors?.round_name?.message}>
                            <Input
                                placeholder='Имя раунда'
                                type='text'
                                {...register('round_name', { required })}
                            />
                        </FieldControl>
                        <FieldControl error={errors?.round_begin_time?.message}>
                            <Input
                                placeholder='Время начала раунда'
                                type='round_begin_time'
                                {...register('round_begin_time', { required })}
                            />
                        </FieldControl>
                        <FieldControl error={errors?.round_begin_time?.message}>
                            <Input
                                placeholder='Время конца раунда'
                                type='round_end_time'
                                {...register('round_end_time', { required })}
                            />
                        </FieldControl>
                        <FieldControl error={errors?.round_status?.message}>
                            <Input
                                placeholder='Статус раунда'
                                type='round_status'
                                {...register('round_status', { required })}
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
                            Создать раунд
                        </ButtonWithCorners>
                    </form>
                </div>
            </div>
        );
    } else {
        return (
            <div className='flex flex-col gap-2'></div>
        );
    }
};

export default AddRound;
