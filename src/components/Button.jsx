export default function Button({borded, children, ...props}){
    const classes = borded 
    ? "px-4 py-2 my-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
    : "px-5 py-1.5 text-stone-900 hover:text-red-500";

    return (
        <button 
            className={classes} 
            {...props}>
                {children}
        </button>
    );
}