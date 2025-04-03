import styles from './Field.module.css';

type TProps = {
    fieldValue: number,
    isVisible: boolean,
    onClick: () => void
}

export default function Field({fieldValue, isVisible, onClick}: TProps): any {
    return (
        <div className={styles.test} onClick={onClick}>
            {isVisible ? <>{fieldValue}</> : <>Memory game</>}
        </div>
    )
}

// TS
// function calc(a: number, b: number): number {
//     return a + b;
// }
// C#
// int calc (int a, int b) {
//     Console.WriteLine(a + b);
// }