import styles from './Button.module.css';

interface Props {
    children: string
}

export default ({children }: Props) => {

    return (
        <button className={ [styles.btn, styles['btn-primary']].join(' ') }>
            { children }
        </button>
    );

}