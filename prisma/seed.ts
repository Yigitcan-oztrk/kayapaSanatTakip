import { PrismaClient, Role, UserStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Check if admin exists
  const adminExists = await prisma.user.findFirst({
    where: { role: Role.ADMIN },
  });

  if (!adminExists) {
    // Create admin user
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || '123456', 10);
    
    await prisma.user.create({
      data: {
        firstName: 'Admin',
        lastName: 'User',
        tc: process.env.ADMIN_TC || '11111111111',
        phoneNumber: process.env.ADMIN_PHONE || '5555555555',
        password: hashedPassword,
        role: Role.ADMIN,
        status: UserStatus.ACTIVE,
      },
    });

    console.log('👤 Admin user created successfully');
  } else {
    console.log('👤 Admin user already exists');
  }
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 