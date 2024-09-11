import React, { useContext, useEffect } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Flex,
    Button,
    Input,
    Select,
    Text,
    Checkbox,
    Stack,
} from '@chakra-ui/react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeContext } from '../context/Context';
import { useId } from 'react';
import { typeTabel } from '../context/Context';

// Define Zod schema
const schema = z.object({
    description: z.string().nonempty('Invalid description'),
    utilty: z.string().nonempty('Invalid utility'),
    Enterment: z.string().nonempty('Invalid Enterment'),
    pending: z.boolean()
});

type TypesInput = z.infer<typeof schema>;

export default function ExpenseList() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm < TypesInput > ({
        resolver: zodResolver(schema),
    });

    const { dataTabel, setdataTabel } = useContext(ThemeContext);

    const onSubmit: SubmitHandler<TypesInput> = (data) => {
        console.log(data)
        const newData: typeTabel = {
            description: data.description,
            id: dataTabel.length + 1,
            pending: data.pending,
            status: data.Enterment,
            utility: data.utilty,
        }
        setdataTabel((dataprvious) => [...dataprvious, newData]);

        reset()
    }

    useEffect(() => {
        console.log(dataTabel)
    }, [dataTabel])

    return (
        <div className='container'>
            <div className='content_form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormLabel>Description</FormLabel>
                    <Input {...register("description")} type='text' />
                    <Text color={'red'}>
                        {errors.description?.message && <p>{errors.description?.message}</p>}
                    </Text>

                    <FormLabel mt={'3'}>Amount</FormLabel>
                    <Input {...register("utilty")} type='text' />
                    <Text color={'red'}>
                        {errors.utilty?.message && <p>{errors.utilty?.message}</p>}
                    </Text>

                    <FormLabel mt={'3'}>Category</FormLabel>
                    <Select {...register("Enterment")} placeholder='Select category'>
                        <option value={'all'}>All Categories</option>
                        <option value={'utilty'}>Utility</option>
                        <option value={'enterment'}>Entertainment</option>
                    </Select>
                    <Text color={'red'}>
                        {errors.Enterment?.message && <p>{errors.Enterment?.message}</p>}
                    </Text>


                    <Stack my={'3'}>
                        <Controller
                            name="pending"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Checkbox {...field} isInvalid>Checkbox</Checkbox>}
                        />

                    </Stack>

                    <Button type='submit' colorScheme='blue' mt={'6'}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}
