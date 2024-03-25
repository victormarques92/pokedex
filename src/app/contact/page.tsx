'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import toast from 'react-hot-toast';
import { TextArea, TextField } from '../../components';
import { Button, ContainerContact, Form, Title } from './styles';
import validationSchema from './validationSchema';

interface SubmitData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<SubmitData> = data => {
    console.log(data);

    toast.success('Mensagem enviada com sucesso!');

    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  return (
    <ContainerContact>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10094.png"
        alt=""
      />

      <div>
        <Title>Entre em contato</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="name"
                label="Nome"
                error={errors?.name?.message}
                placeholder="Digite seu nome"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="email"
                label="E-mail"
                error={errors?.email?.message}
                placeholder="Digite seu e-mail"
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                id="message"
                label="Mensagem"
                error={errors?.message?.message}
                placeholder="Digite sua mensagem"
              />
            )}
          />

          <Button type="submit">Enviar</Button>
        </Form>
      </div>
    </ContainerContact>
  );
};

export default Contact;
