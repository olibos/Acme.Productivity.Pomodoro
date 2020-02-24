import * as React from "react";
import { FC } from "react";

const ReduxFormInput: FC = (field: any) => (
    <>
        <span>{field.label}</span>
        <input {...field.input}
                  type={field.type}
                  placeholder={field.placeHolder}
                  max={field.maxDate}
                  min={field.minDate}
                  step={field.step}
                  disabled={field.disabled}/>
        {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
    </>
);

export default ReduxFormInput;