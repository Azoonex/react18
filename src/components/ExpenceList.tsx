import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Button,
    Input,
    Select,
    Text,
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    description: z.string().nonempty('invalide descript'),
    utilty: z.string().nonempty('invalide utilty'),
    Enterment: z.string().nonempty('invalide Enterment'),
})

const TypesInput = z.infer < typeof schema >

export default function ExpenceList() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm < TypesInput > ({
        resolver: zodResolver(schema),
    })
    const onSubmit: SubmitHandler<TypesInput> = (data) => {
        console.log(data)
        
    }

    return (
        <div className='container'>
            <div className='content_form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormLabel>Desciption</FormLabel>
                    <Input {...register("description")} type='text' />
                    <Text color={'red'}>
                        {errors.description?.message && <p>{errors.description?.message}</p>}
                    </Text>
                    <FormLabel mt={'3'}>Amout</FormLabel>
                    <Input {...register("utilty")} type='text' />
                    <Text color={'red'}>
                        {errors.utilty?.message && <p>{errors.utilty?.message}</p>}
                    </Text>
                    <FormLabel mt={'3'}>Category</FormLabel>
                    <Select  {...register("Enterment")} placeholder='Select country'>
                        <option value={'all'}>all Category</option>
                        <option value={'utilty'}>utiltiy</option>
                        <option value={'enterment'}>Enterment</option>
                    </Select>
                    <Text color={'red'}>
                        {errors.Enterment?.message && <p>{errors.Enterment?.message}</p>}
                    </Text>
                    <Button type='submit' color={'blue'} mt={'6'}>
                        submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

