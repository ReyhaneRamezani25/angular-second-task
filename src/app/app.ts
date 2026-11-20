import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginForm } from './login/components/login-form/login-form';
import { IUser } from './shared/models/user';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  users: IUser[] = [
  {
    id: 1,
    email: 'sara.admin@example.com',
    password: 'Admin@123',
    role: 'admin',
    status: true,
    salary: 65000000,
    position: 'System Administrator'
  },
  {
    id: 2,
    email: 'ali.admin@example.com',
    password: 'Admin@456',
    role: 'admin',
    status: true,
    salary: 70000000,
    position: 'Senior System Administrator'
  },
  {
    id: 3,
    email: 'reza.user@example.com',
    password: 'User@123',
    role: 'user',
    status: true,
    salary: 45000000,
    position: 'Frontend Developer'
  },
  {
    id: 4,
    email: 'mina.user@example.com',
    password: 'User@456',
    role: 'user',
    status: true,
    salary: 55000000,
    position: 'Backend Developer'
  },
  {
    id: 5,
    email: 'nima.user@example.com',
    password: 'User@789',
    role: 'user',
    status: false,
    salary: 50000000,
    position: 'Database Developer'
  },
  {
    id: 6,
    email: 'sara.user@example.com',
    password: 'User@321',
    role: 'user',
    status: true,
    salary: 40000000,
    position: 'UI/UX Designer'
  },
  {
    id: 7,
    email: 'amir.user@example.com',
    password: 'User@654',
    role: 'user',
    status: true,
    salary: 42000000,
    position: 'QA Engineer'
  },
  {
    id: 8,
    email: 'mahan.operator@example.com',
    password: 'Operator@123',
    role: 'operator',
    status: true,
    salary: 35000000,
    position: 'System Operator'
  },
  {
    id: 9,
    email: 'neda.operator@example.com',
    password: 'Operator@456',
    role: 'operator',
    status: true,
    salary: 38000000,
    position: 'Maintenance Operator'
  },
  {
    id: 10,
    email: 'hossein.operator@example.com',
    password: 'Operator@789',
    role: 'operator',
    status: false,
    salary: 32000000,
    position: 'Technical Support Specialist'
  }
 ];
}
