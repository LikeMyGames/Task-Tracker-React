import style from "./ListOptionLoading.module.css"

export default function ListOptionLoading() {
    return (
        <>
            <button type="button" className={style.loading} />
            <button type="button" className={style.loading} />
            <button type="button" className={style.loading} />
        </>
    )
}