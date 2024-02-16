import {forwardRef} from "react";

const Input = forwardRef(function Input({label, textarea, ...props}, ref){
    const labelClasses = "mt-6 text-left uppercase font-bold text-stone-500";
    const inputClasses = "px-1 py-2 bg-stone-200 border-b-2 border-stone-300 rounded focus:outline-none focus:border-stone-600";

    return (
        <p className="flex flex-col">
            <label className={labelClasses}>
                {label}
                </label>
            {textarea && 
                <textarea ref={ref} className={inputClasses} {...props}/>}
            {!textarea && 
                <input ref={ref} className={inputClasses} {...props}/>}
        </p>
    );
});

export default Input;