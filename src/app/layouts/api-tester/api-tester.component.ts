import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-tester',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './api-tester.component.html',
  styleUrl: './api-tester.component.css'
})
export class ApiTesterComponent {

  isSidebarCollapsed = false;
  apiUrl: string = '';
  requestType: string = 'GET';
  requestBody: string = '';
  response: any = null;
  activeTab: string = 'history';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // Example data for history
  apiCallHistory: { url: string, method: string }[] = [
    { url: 'https://jsonplaceholder.typicode.com/posts', method: 'GET' },
    { url: 'https://jsonplaceholder.typicode.com/posts/1', method: 'GET' },
    { url: 'https://jsonplaceholder.typicode.com/posts', method: 'POST' },
    { url: 'https://jsonplaceholder.typicode.com/posts/1', method: 'PUT' },
    { url: 'https://jsonplaceholder.typicode.com/posts/1', method: 'DELETE' }
  ];

  // Example data for collections
  collections: { name: string, requests: { url: string, method: string }[] }[] = [
    {
      name: 'User Management',
      requests: [
        { url: 'https://api.example.com/users', method: 'GET' },
        { url: 'https://api.example.com/users', method: 'POST' },
        { url: 'https://api.example.com/users/1', method: 'PUT' },
        { url: 'https://api.example.com/users/1', method: 'DELETE' }
      ]
    },
    {
      name: 'Product Management',
      requests: [
        { url: 'https://api.example.com/products', method: 'GET' },
        { url: 'https://api.example.com/products', method: 'POST' },
        { url: 'https://api.example.com/products/1', method: 'PUT' },
        { url: 'https://api.example.com/products/1', method: 'DELETE' }
      ]
    }
  ];

  constructor(private http: HttpClient) {}



  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  sendRequest() {
    // Send request to your backend service
    this.http.post('/api/forward-request', {
      url: this.apiUrl,
      method: this.requestType,
      body: this.requestBody
    }).subscribe(
      response => {
        this.response = response;
        this.addToHistory();
      },
      error => {
        this.response = { status: 'Error', body: error.message, headers: {} };
      }
    );
  }

  addToHistory() {
    this.apiCallHistory.unshift({ url: this.apiUrl, method: this.requestType });
    if (this.apiCallHistory.length > 10) {
      this.apiCallHistory.pop();
    }
  }
}
