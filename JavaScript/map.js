// === Find Us / Google map
//Directions: where ubuntu Animal Rescue is located
const destination = " Ubuntu Animal Rescue,Polokwane, Limpopo, South Africa";
// Load the map once the page is ready 
document.addEventListener("DOMContentLoaded", function() {
    const mapFrame = document.getElementById("rescueMap");
    if (mapFrame) {
        // Default map view centered on the rescue's location 
        mapFrame.src =
            `https://maps.google.com/maps?q=${encodeURIComponent(destination)}&z=13&output=embed`;
    }
    const directionBtn =
        document.getElementById("directionsBtn");

    if (directionsBtn) {
        directionsBtn.addEventListener("click",
            getDirections);
    };
});
// Get the visitor's location and show driving directions to the rescue
function getDirections() {
    const statusEl = document.getElementById("mapStatus");
    const mapFrame = document.getElementById("rescueMap");

    if (!navigator.geolocation) {
        if (statusEl) {
            statusEl.textContent = "Geolocation isn't supported by your browser. Opening directions without your starting point.";
        }
        window.open(
            "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(destination),
            "_blank"
        );
        return;
    }

    if (statusEl) {
        statusEl.textContent = "Locating you...";
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const origin = position.coords.latitude + "," + position.coords.longitude;
            if (statusEl) {
                statusEl.textContent = "Opening directions in Google Maps...";
            }

            if (mapFrame) {
                mapFrame.src =
                    "https://maps.google.com/maps?saddr=" + origin +
                    "&daddr=" + encodeURIComponent(destination) +
                    "&output=embed";
            }

            window.open(
                "https://www.google.com/maps/dir/?api=1&origin=" + origin +
                "&destination=" + encodeURIComponent(destination) +
                "&travelmode=driving",
                "_blank"
            );
        },
        function(error) {
            if (statusEl) {
                statusEl.textContent = "Couldn't get your location (" + error.message + "). Opening directions without your starting point.";
            }
            window.open(
                "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(destination),
                "_blank"
            );
        }
    );
}