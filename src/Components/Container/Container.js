const Container = (props) => {
    return (
        <main className={props.className}>
            {props.children}
        </main>
    )
}

export default Container