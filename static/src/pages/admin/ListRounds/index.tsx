import { TComponent } from 'utils/types/elements';
import {useNavigate} from "react-router";
import {useState} from "react";
import {SubmitHandler, useForm, useFormState} from "react-hook-form";
import {TRoundAddReq} from "api/api.v2.types";
import {apiV2} from "api";
import {catchHandler} from "utils/helpers/api";
import {ButtonWithCorners} from "components/uiKit/ButtonWithCorners";
import {Spinner} from "components/uiKit/Spinner";
import css from './style.module.scss';
import { ROUTES } from 'utils/constants/routes';

const ListRounds: TComponent = () => {
    const navigate = useNavigate();
    const [resErrorMessage, setResErrorMessage] = useState<string>('');
    const [ListRoundsOut, setListRounds] = useState([]);

    const { handleSubmit, control } = useForm<TRoundAddReq>();
    const { isSubmitting } = useFormState<TRoundAddReq>({ control });
    const userName = "Василий!";

    const ListRounds = async () => {
        return await apiV2.rounds
            .listRounds()
            .then((data: any) => {
                setListRounds(data);
            })
            .catch(catchHandler(setResErrorMessage));
    };

    const onSubmit: SubmitHandler<TRoundAddReq> = async (data) => {
        return await apiV2.rounds
            .addRound(data)
            .then(() => navigate(ROUTES.LOGIN))
            .catch(catchHandler(setResErrorMessage));
    };

    return (
        <div className='flex flex-col gap-2'>
            {resErrorMessage ? "" : null}
            <div className={css.header}>
                <h2 className={css.title}>Список раундов:</h2>
                <span className={css.title}>{userName}</span>
            </div>
            <form
                className='flex flex-col gap-4'
                onSubmit={handleSubmit(onSubmit)}
                onChange={handleSubmit(ListRounds)}
            >
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
            <div className={css.list_rounds}>
                {
                    ListRoundsOut.map((value) => (
                        <div className={css.list_rounds_item} id={value["id"]}>
                            Round-Id: {value["id"]}
                            Start: {value["round_begin_time"]}
                            End: {value["round_end_time"]}
                            <hr />
                            Статус: {value["round_status"]}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ListRounds;
