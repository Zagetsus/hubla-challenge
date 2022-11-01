import { PrismaClient, UserTypeEnum } from '@prisma/client';
import { hash } from 'bcryptjs';
import * as faker from 'faker';

const prisma = new PrismaClient();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

interface userTypes {
  [key: number]: UserTypeEnum;
}

const main = async () => {
  const today = new Date();
  const password = await hash('12345678', 8);

  const userTypes: userTypes = ['PRODUCER', 'AFFILIATE'];

  await prisma.user.createMany({
    data: [
      {
        name: 'Luan Verdelho',
        email: 'luanverdelho642@gmail.com',
        password: await hash('9GjbB*mM', 8),
        imageUrl: faker.image.avatar(),
        userType: 'ADMIN'
      },
      {
        name: 'Jose Carlos',
        email: faker.internet.email(),
        password: password,
        imageUrl: faker.image.avatar(),
        userType: 'AFFILIATE'
      },
      {
        name: 'Maria Candida',
        email: faker.internet.email(),
        password: password,
        imageUrl: faker.image.avatar(),
        userType: 'AFFILIATE'
      },
      {
        name: 'Thiago Oliveira',
        email: faker.internet.email(),
        password: password,
        imageUrl: faker.image.avatar(),
        userType: 'AFFILIATE'
      },
      {
        name: 'Eliana Nogueira',
        email: faker.internet.email(),
        password: password,
        imageUrl: faker.image.avatar(),
        userType: 'AFFILIATE'
      },
      {
        name: 'Carlos Batista',
        email: faker.internet.email(),
        password: password,
        imageUrl: faker.image.avatar(),
        userType: 'AFFILIATE'
      },
      {
        name: 'Carolina Machado',
        email: faker.internet.email(),
        password: password,
        imageUrl: faker.image.avatar(),
        userType: 'AFFILIATE'
      },
      {
        name: 'Celso De Melo',
        email: faker.internet.email(),
        password: password,
        imageUrl: faker.image.avatar(),
        userType: 'AFFILIATE'
      }
    ]
  });

  await prisma.user.createMany({
    data: [...Array(8).keys()].map(() => ({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      password,
      imageUrl: faker.image.avatar(),
      userType: 'TEACHER'
    }))
  });

  await prisma.user.createMany({
    data: [...Array(20).keys()].map(() => ({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      password,
      imageUrl: faker.image.avatar(),
      userType: userTypes[getRandomInt(2)]
    }))
  });

  const teachers = await prisma.user.findMany({
    where: { userType: 'TEACHER' }
  });
  const sellers = await prisma.user.findMany({
    where: { OR: [{ userType: 'PRODUCER' }, { userType: 'AFFILIATE' }] }
  });

  await prisma.typeTransaction.createMany({
    data: [
      {
        type: 1,
        description: 'Venda produtor',
        nature: 'ENTRY'
      },
      {
        type: 2,
        description: 'Venda afiliado',
        nature: 'ENTRY'
      },
      {
        type: 3,
        description: 'Comissão paga',
        nature: 'OUTPUT'
      },
      {
        type: 4,
        description: 'Comissão recebida',
        nature: 'ENTRY'
      }
    ]
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'DESENVOLVEDOR FULL STACK',
        teacherId: teachers[getRandomInt(8)].id,
        duration: 720000
      },
      {
        name: 'DOMINANDO INVESTIMENTOS',
        teacherId: teachers[getRandomInt(8)].id,
        duration: 180000
      },
      {
        name: 'CURSO DE BEM-ESTAR',
        teacherId: teachers[getRandomInt(8)].id,
        duration: 180000
      },
      {
        name: 'APRENDA FLUTTER E DESENVOLVA APPS PARA ANDROID E IOS 2022',
        teacherId: teachers[getRandomInt(8)].id,
        duration: 216000
      },
      {
        name: 'DOCKER: FERRAMENTA ESSENCIAL PARA DESENVOLVEDORES',
        teacherId: teachers[getRandomInt(8)].id,
        duration: 21600
      }
    ]
  });

  const transactionsTypes = await prisma.typeTransaction.findMany();
  const products = await prisma.product.findMany();

  await prisma.extract.createMany({
    data: [...Array(1000).keys()].map(() => ({
      transactionTypeId: transactionsTypes[getRandomInt(4)].id,
      creatorId: sellers[getRandomInt(20)].id,
      sellerId: sellers[getRandomInt(20)].id,
      productId: products[getRandomInt(5)].id,
      price: faker.finance.amount(50, 1000),
      createdAt: faker.date.between(
        new Date(new Date().setDate(today.getDate() - 90)),
        today
      )
    }))
  });
};
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect()); // eslint-disable-line
