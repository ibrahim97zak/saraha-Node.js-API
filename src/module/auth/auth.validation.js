import joi from 'joi'
export const signupScheme =
 {
    body:joi.object({
        userName :joi.string().alphanum().min(2).max(20).required().messages({
            'any.required':'username is required',
            'string.empty':'usernmae is empty'
        }),
        email: joi.string().email({maxDomainSegments:3,tlds:{allow:['com','net']}}).required().messages({
            'any.required':'email is required',
            'string.empty':'email is empty'
        }),
        password: joi.string().required(),
        cPassword: joi.string().valid(joi.ref('password')).required(),
        age:joi.number().integer().min(20).max(80),
        gender: joi.string().alphanum().valid('male','female').required()
    }).required(),
    query:joi.object({
        test:joi.boolean(),
    }).required(),
 }

export const loginScheme =
 {
    body:joi.object({
        password: joi.string().required(),
        email: joi.string().email().required(),
    }).required()
 }