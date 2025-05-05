// "use client";
// import { Stack } from '@mui/material';
// import React from 'react'
// import { useForm } from 'react-hook-form';
// import InputField from '../../inputfield/InputField';
// import UiButton from '@/shared/pure-components/button/button';

// const BasicInquiryForm = () => {
//     const { control, handleSubmit } = useForm();


//     const onSubmit = (data) => {
//     }

//     return (
//         <Stack>
//         <Stack
//           component="form"
//           spacing={2}
//           justifyContent="center"
//           alignItems="center"
//           action="https://formsubmit.co/el/xikuyu"
//           method="POST"
//         >
//           {/* Optional: Hidden fields */}
//           <input type="hidden" name="_captcha" value="false" />
//           <input type="hidden" name="_next" value="https://google.com" />
  
//           <InputField name="name" label="Name" required />
//           <InputField name="email" label="Email" type="email" required />
//           <InputField name="message" label="Message" minRows={4} multiline required />
  
//           <Stack direction="row" spacing={2} justifyContent="flex-end" pt={4}>
//             <UiButton variant="contained" color="primary" type="submit">
//               Submit
//             </UiButton>
//             <UiButton variant="outlined" type="reset">
//               Reset
//             </UiButton>
//           </Stack>
//         </Stack>
//       </Stack>
//     )
// }

// export default BasicInquiryForm

"use client";
import { Stack } from "@mui/material";
import React from "react";
import InputField from "../../inputfield/InputField";
import UiButton from "@/shared/pure-components/button/button";

const BasicInquiryForm = () => {
  return (
    <Stack>
      <form
        action="https://formsubmit.co/044fdfa44cdc75fab56b24826d05131c"
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {/* Hidden config inputs */}
        {/* <input type="hidden" name="_captcha" value="false" /> */}
        {/* <input type="hidden" name="_next" value="http://localhost:3000/dashboard/contact" /> */}

        {/* Visible fields */}
        <InputField name="name" label="Name" required />
        <InputField name="email" label="Email" type="email" required />
        <InputField
          name="message"
          label="Message"
          multiline
          minRows={4}
          required
        />

        {/* Buttons */}
        <Stack direction="row" spacing={2} justifyContent="flex-end" pt={2}>
          <UiButton variant="contained" color="primary" type="submit">
            Submit
          </UiButton>
          <UiButton variant="outlined" type="reset">
            Reset
          </UiButton>
        </Stack>
      </form>
    </Stack>
  );
};

export default BasicInquiryForm;
