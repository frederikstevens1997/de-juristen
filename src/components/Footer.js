import Button from "./Button"

const Footer = () => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <footer className="footer">
            <Button onClick={onClick} text="Submit" />
        </footer>
    )
}

export default Footer
