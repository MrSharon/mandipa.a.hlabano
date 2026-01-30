export const Button = ({classname ="", size ="default", children }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visibility:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

    const sizeClasses= {
        sm: "px-4 py-2 text-sm leading-tight leading-tight",
        default: "px-6 py-3 leading-tight leading-tight",
        lg: "px-8 py-4 leading-tight leading-tight",
    };
    const classes = `${baseClasses} ${sizeClasses[size]} ${classname}`;
    return (
        <button className={classes}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}