import {
    Box,
    Grid,
    FormControl,
    TextField,
    FormHelperText,
    InputAdornment,
    Button,
    Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useFormStyles = makeStyles(theme => ({
    welcomeText: {
        margin: "0 auto 1.5vh 0",
        [theme.breakpoints.down("sm")]: {
            margin: "0 auto",
        },
    },
    buttonWrapper: {
        marginTop: "8vh",
        [theme.breakpoints.down("sm")]: {
            marginTop: "2.5vh",
        },
    },
    submitButton: {
        fontWeight: 700,
        padding: "1.5vh 0",
        [theme.breakpoints.down("xs")]: {
            padding: "0.6vh 1vw",
        },
    },
}))

const checkNeedPasswordHelper = (label, passwordHelper) => {
    if (label === "password" && passwordHelper) {
        return {
            endAdornment: (
                <InputAdornment position="start">
                    <Box color="primary.main">
                        {passwordHelper}
                    </Box>
                </InputAdornment>
            ),
        }
    }
}

const Form = ({
    welcomeText,
    fields,
    passwordHelper,
    submitText,
    onFormSubmit
}) => {

    const formStyles = useFormStyles();

    return (
        <form onSubmit={onFormSubmit}>
            <Grid container justifyContent="center" direction="column">
                <Typography variant="h4" component="h1" className={formStyles.welcomeText}>
                    {welcomeText}
                </Typography>

                {fields.map((field, idx) => {
                    const inputProps = checkNeedPasswordHelper(field.label, passwordHelper);
                    return (
                        <FormControl 
                            error={field.formErrorMessage ? !!field.formErrorMessage.confirmPassword: null}
                            margin="normal"
                            key={idx} 
                            required
                            >

                            <TextField
                                label={field.displayLabel}
                                aria-label={field.label}
                                type={field.label === "confirmPassword" ? "password" : field.label}
                                name={field.label}
                                size="medium"
                                InputProps={inputProps}
                                />
                            {field.formErrorMessage &&
                                <FormHelperText>
                                    {field.formErrorMessage.confirmPassword}
                                </FormHelperText>
                            }

                        </FormControl>
                    )
                })}

                <Box className={formStyles.buttonWrapper} display="flex">
                    <Button type="submit" variant="contained" size="small" color="primary">
                        <Typography variant="button" >
                            <Box className={formStyles.submitButton}> 
                                {submitText}
                            </Box>
                        </Typography>
                    </Button>
                </Box>

            </Grid>
        </form>
    )
}
export default Form;