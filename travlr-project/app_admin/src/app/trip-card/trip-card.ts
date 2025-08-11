import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripDataService } from '../trip-data';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCardComponent {
  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  editTrip(trip: any): void {
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  deleteTrip(trip: any): void {
    if (confirm(`Are you sure you want to delete "${trip.name}"?`)) {
      this.tripDataService.deleteTrip(trip.code).subscribe({
        next: (result) => {
          console.log('Trip deleted:', result);
          // Refresh the page to show updated trip list
          window.location.reload();
        },
        error: (error) => {
          console.log('Error deleting trip:', error);
          alert('Error deleting trip. Please try again.');
        }
      });
    }
  }
}
