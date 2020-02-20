import * as React from "react";
import { FC } from "react";
import { Input, Label } from 'reactstrap';

const ReduxFormInput: FC = (field: any) => (
    <>
        <Label>{field.label}</Label>
        <Input
            {...field.input}
            type={field.type}
            placeholder={field.placeHolder}
            max={field.maxDate}
            min={field.minDate}
            step={field.step}
            disabled={field.disabled}
        />
        {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
    </>
);

export default ReduxFormInput;