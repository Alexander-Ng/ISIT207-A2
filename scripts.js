// Index.html - to listen to location text box
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const collectFromInput = document.getElementById('collectFrom');
    const locationDropdown = document.getElementById('locationDropdown');
    
    const locations = [
        "Admiralty Park",
        "Adventure Cove Waterpark",
        "Ang Mo Kio",
        "Ang Mo Kio Linear Park",
        "Ang Mo Kio Town Garden East",
        "Ang Mo Kio Town Garden West",
        "BCA Academy",
        "Bedok",
        "Bedok Jetty",
        "Bedok Town Park",
        "Bishan",
        "Boon Lay",
        "Boon Lay Community Club",
        "Braddell MRT Station",
        "Buangkok Square Mall",
        "Buddha Tooth Relic Temple and Museum",
        "Bukit Batok",
        "Bukit Batok MRT Station",
        "Bukit Batok Nature Park",
        "Bukit Gombak MRT Station",
        "Bukit Merah",
        "Bukit Panjang",
        "Bukit Panjang Plaza",
        "Butterfly Park and Insect Kingdom",
        "Catholic High School",
        "Century Square",
        "Changi",
        "Changi Airport",
        "Changi Airport",
        "Changi Bay",
        "Changi Beach Park",
        "Changi City Point",
        "Changi Coast Outdoor Adventure Learning Centre",
        "Changi Exhibition Centre",
        "Changi Jurassic Mile",
        "Changi Point Coastal Walk",
        "Changi Point Ferry Terminal",
        "Changi Village Hawker Centre",
        "Chinatown",
        "Chinatown Complex",
        "Chinatown Heritage Centre",
        "Chinatown Point",
        "Chinatown Street Market",
        "Choa Chu Kang",
        "Ci Yuan Community Club",
        "Clementi",
        "Clementi Mall",
        "Coastal Playgrove",
        "Cow Play Cow Moo",
        "Damai LRT Station",
        "Design Orchard",
        "Dhoby Ghaut Green",
        "Duxton Plain Park",
        "Forum the Shopping Mall",
        "Funan",
        "Geylang",
        "Gleneagles Hospital",
        "Haji Lane",
        "Hampstead Wetland Park",
        "Headrock VR",
        "Henderson Waves",
        "Hindhede Nature Park",
        "Hong Lim Park",
        "HortPark",
        "Hougang",
        "Hougang Community Club",
        "Hougang Village",
        "IMM",
        "Istana Park",
        "Jamae Mosque",
        "JCube",
        "Jem",
        "Joo Chiat Community Club",
        "Junction 8",
        "Junction Nine",
        "Jurong East",
        "Jurong West",
        "Kadaloor LRT Station",
        "Kallang Riverside Park",
        "Katong Shopping Centre",
        "Kent Ridge Park",
        "Keppel Marina East Desalination Plant",
        "KINEX",
        "Kranji MRT Station",
        "Kreta Ayer Community Club",
        "Leisure Park Kallang",
        "Leng Ern Jee Temple",
        "Liat Towers",
        "Lim Chu Kang",
        "Lorong Halus Wetland",
        "Lot One",
        "Lower Peirce Reservoir Park",
        "Lower Seletar Reservoir Park",
        "Loyang Tua Pek Kong",
        "Luxus Hills Park",
        "MacRitchie Reservoir Park",
        "Madame Tussauds Singapore",
        "Mandai",
        "Marina Bay Golf Course",
        "Marine Cove",
        "Marine Parade",
        "Marsiling MRT Station",
        "Midpoint Orchard",
        "Millenia Walk",
        "Mount Faber",
        "Nanyang Polytechnic",
        "National Service Resort & Country Club",
        "Newton Food Centre",
        "Nex",
        "Ng Teng Fong General Hospital",
        "Ngee Ann Polytechnic",
        "Nibong LRT Station",
        "Northshore Plaza",
        "Oasis LRT Station",
        "Orchard Gateway",
        "Orchard MRT Station",
        "Orchard Road",
        "Orchid Country Club",
        "Our Tampines Hub",
        "Palais Renaissance",
        "Paragon",
        "Park Connector Network",
        "Parkland Green",
        "Parkway Parade",
        "Pasir Ris",
        "Pasir Ris Elias Community Club",
        "Pasir Ris Town Park",
        "Paya Lebar Quarter",
        "Pearl's Hill City Park",
        "People's Park Centre",
        "People's Park Complex",
        "Punggol",
        "Punggol 21 Community Club",
        "Punggol Community Club",
        "Punggol Park",
        "Punggol Plaza",
        "Punggol Point LRT Station",
        "Punggol Point Park",
        "Punggol Waterway Park",
        "Queenstown",
        "Raffles Institution",
        "Raffles Place Park",
        "Republic Polytechnic",
        "Republic Polytechnic Library",
        "Road Safety Community Park",
        "Round Island Route",
        "Rower's Bay Park",
        "Royal Albatross",
        "SAFRA Mount Faber",
        "SAFRA Punggol",
        "Sam Kee LRT Station",
        "Samudera LRT Station",
        "Scotts Square",
        "Seletar Country Club",
        "Sembawang",
        "Sembawang Park",
        "Sengkang",
        "Sengkang Community Club",
        "Sengkang Riverside Park",
        "Sentosa 4D Adventureland",
        "Sentosa Island",
        "Serangoon",
        "Singapore Aviation Academy",
        "Singapore General Hospital",
        "Singapore Island Country Club",
        "Singapore Management University",
        "Singapore Polytechnic",
        "Singapore University of Social Sciences",
        "Singapore Wake Park",
        "Singapore Zoo",
        "SkyHelix Sentosa",
        "Skyline Luge Sentosa",
        "Soo Teck LRT Station",
        "Southern Ridges",
        "Springleaf Nature Park",
        "Sri Mariamman Temple",
        "St. John's Island",
        "St. Joseph's Institution",
        "Sumang LRT Station",
        "Sun Plaza Park",
        "T Galleria by DFS",
        "Tampines",
        "Tampines 1",
        "Tampines Eco Green",
        "Tampines Mall",
        "Tampines North Community Club",
        "Teck Lee LRT Station",
        "Tekka Centre",
        "Telok Blangah Hill Park",
        "Temasek Polytechnic",
        "Tengah",
        "The Cat Museum",
        "The Centrepoint",
        "The Float @ Marina Bay",
        "The Flying Trapeze",
        "The Heeren",
        "The Rail Mall",
        "Thomson Nature Park",
        "Toa Payoh",
        "Toa Payoh MRT Station",
        "Toa Payoh MRT Station",
        "Trick Eye Museum Singapore",
        "West Mall",
        "Westgate",
        "Wheelock Place",
        "White Sands Shopping Mall",
        "Wild Wild Wet",
        "Wisma Atria",
        "Woodlands",
        "Woodlands Galaxy Community Club",
        "Woodlands MRT Station",
        "Woodlands Waterfront Park",
        "Yew Tee MRT Station",
        "Yew Tee MRT Station",
        "Yishun",
        "Yishun Neighbourhood Park",
        "Yishun Park",
        "Yishun Pond Park",
        "Youth Olympic Park",
        "Yuhua Community Club",
        "Zhongshan Mall"
    ];
  
    if (collectFromInput) {
        collectFromInput.addEventListener('input', function() {
          const inputValue = collectFromInput.value.toLowerCase();
          locationDropdown.innerHTML = '';
          if (inputValue.length > 2) {
            const filteredLocations = locations.filter(location => location.toLowerCase().includes(inputValue));
            filteredLocations.forEach(location => {
              const locationDiv = document.createElement('div');
              locationDiv.textContent = location;
              locationDiv.addEventListener('click', function() {
                collectFromInput.value = location;
                locationDropdown.style.display = 'none';
              });
              locationDropdown.appendChild(locationDiv);
            });
            locationDropdown.style.display = filteredLocations.length ? 'block' : 'none';
          } else {
            locationDropdown.style.display = 'none';
          }
        });
    
        document.addEventListener('click', function(event) {
          if (event.target !== collectFromInput) {
            locationDropdown.style.display = 'none';
          }
        });
    }
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(searchForm);
            const queryParams = new URLSearchParams();
            
            formData.forEach((value, key) => {
                console.log(key + ': ' + value);
                queryParams.append(key, value);
            });
            window.location.href = 'payment.html?' + queryParams.toString();
        });
    }
});


// Login.html - to listen to username and password
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                alert('Login successful');
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password. Have you registered?');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(user => user.username === username);

            if (userExists) {
                alert('User already exists');
            } else {
                users.push({ username, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful');
                window.location.href = 'login.html';
            }
        });
    }

    // Basic animation
    const cars = document.querySelectorAll('.car');
    cars.forEach(car => {
        car.addEventListener('mouseover', () => {
            car.style.transform = 'scale(1.1)';
            car.style.transition = 'transform 0.3s';
        });
        car.addEventListener('mouseout', () => {
            car.style.transform = 'scale(1)';
        });
    });
});