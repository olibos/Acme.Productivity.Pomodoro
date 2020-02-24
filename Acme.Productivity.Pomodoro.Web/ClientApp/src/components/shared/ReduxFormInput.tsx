import * as React from "react";
import { FC } from "react";
import { TextField } from '@material-ui/core';

const ReduxFormInput: FC = (field: any) => (
    <>
        <TextField id={field.name} label={field.label} {...field.input} />
        {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
    </>
);

export default ReduxFormInput;