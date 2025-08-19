import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';

declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(
  ) {
    console.log({ isBrowser: this.isBrowser });
    // Initialize the map when the script loads
    // if (document.readyState === "loading") {
    //   document.addEventListener("DOMContentLoaded", initializeMap);
    // } else {
    //   this.initializeMap();
    // }

    if (this.isBrowser) {
      setTimeout(() => {
        console.log("Initializing map");
        this.initializeMap();
      }, 10);
    }
  }

  /**
   * Wait for both DOM and Leaflet to be ready 
   */
  private initializeMap(

  ): void {
    // Check if Leaflet is loaded and DOM is ready
    if (typeof L !== "undefined" && document.getElementById("map")) {
      try {
        // Create map centered on Copenhagen, Denmark (default location for Tail Mates)
        const map = L.map("map", {
          zoomControl: true,
          attributionControl: true,
        }).setView([55.6761, 12.5683], 18);

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
          subdomains: ["a", "b", "c"],
        }).addTo(map);

        // Add a marker for the default location
        const marker = L.marker([55.6761, 12.5683])
          .addTo(map)
          .bindPopup(
            "<strong>Welcome to Tail Mates!</strong><br/>Find your perfect tail mate here.",
          );

        // Optional: Open popup after a short delay
        setTimeout(() => {
          marker.openPopup();
        }, 1000);

        // Handle resize events
        window.addEventListener("resize", () => {
          map.invalidateSize();
        });

        console.log("Map initialized successfully");
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    } else {
      // Retry after a short delay if Leaflet isn't loaded yet
      setTimeout(this.initializeMap.bind(this), 100);
    }
  }

}
