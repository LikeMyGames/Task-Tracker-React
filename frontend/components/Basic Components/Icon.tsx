// "use client"

const Button: React.FC<{ children?: React.ReactNode; className?: string; iconName?: string }> = ({ children, className, iconName }) => {
    return (
        <>
            {
                children == null ? (
                    <span className={`material-symbols-rounded ${className ?? ""}`}>
                        {iconName}
                    </span>
                ) : (
                    <span className={`material-symbols-rounded ${className ?? ""}`}>
                        {children}
                    </span>
                )
            }
        </>
    )
}

export default Button