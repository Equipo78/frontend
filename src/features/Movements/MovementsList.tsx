import Movement from './Movement';
import { Movement as MovementInterface } from './movement.interface';
import { useGetMovementsQuery } from './movementsApiSlice';
import styles from './styles.module.scss';

const MovementsList = () => {
  const { data: movements, isLoading, isSuccess, isError } = useGetMovementsQuery('movementsList');

  let content;

  if (isLoading) content = <h3>loading...</h3>;

  if (isError) content = <p>please try again.</p>;

  if (isSuccess) {
    console.log(movements);

    content = (
      <section className={styles.containerMov}>
        <h3>Ultimos movimientos</h3>

        <ul className={styles.boxList}>
          {movements.map((data: MovementInterface) => (
            <Movement key={data.id} data={data} />
          ))}
        </ul>

        <button>Ver mas</button>
      </section>
    );
  }

  return content;
};

export default MovementsList;
