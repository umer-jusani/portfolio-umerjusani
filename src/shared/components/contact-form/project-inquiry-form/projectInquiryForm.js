import { Stack } from '@mui/material'
import React from 'react'
import InputField from '../../inputfield/InputField'
import { useForm } from 'react-hook-form';
import UiButton from '@/shared/pure-components/button/button';

const ProjectInquiryForm = () => {

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Stack>
            <Stack component={"form"} spacing={2} onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    name={"name"}
                    label={"Name"}
                    // control={control}
                />
                <InputField
                    name={"email"}
                    label={"Email"}
                // control={control}
                />
                <InputField
                    name={"message"}
                    label={"Message"}
                    minRows={4}
                    multiline
                // control={control}
                />
                <Stack direction={"row"} spacing={2} justifyContent={"flex-end"} pt={4} >
                    <UiButton variant={"contained"} color={"primary"} type={"submit"} loading={true}>Submit</UiButton>
                    <UiButton variant={"outlined"} type={"reset"}>Reset</UiButton>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ProjectInquiryForm
