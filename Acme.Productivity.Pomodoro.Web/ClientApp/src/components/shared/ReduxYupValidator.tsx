import { Schema } from "yup";

const ReduxYupValidator = (schema: Schema<any>) => async (values: any) =>
{
    try
    {
        await schema.validate(values, { abortEarly: false });
        return {};
    }
    catch (errors)
    {
        throw errors.inner.reduce(
            (errors: any, err: any) => ({
                ...errors,
                [err.path]: err.message,
            }),
            {},
        );
    }
};

export default ReduxYupValidator;