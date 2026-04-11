import requests
import os

API_URL = os.getenv('REACT_APP_BACKEND_URL', 'https://infra-connect-6.preview.emergentagent.com')

projects = [
    {
        "title": "Mumbai-Pune Expressway Expansion",
        "description": "Major highway expansion project increasing capacity and improving safety features along the critical Mumbai-Pune corridor.",
        "category": "Highway Construction",
        "location": "Maharashtra",
        "year": "2024",
        "image_url": "https://images.unsplash.com/photo-1758551470883-af58f1556bfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwYWVyaWFsfGVufDB8fHx8MTc3NTkzMDUwMXww&ixlib=rb-4.1.0&q=85"
    },
    {
        "title": "Nagpur Ring Road Bridge",
        "description": "Construction of modern flyover bridge as part of Nagpur Ring Road development project.",
        "category": "Bridge Construction",
        "location": "Nagpur",
        "year": "2023",
        "image_url": "https://images.unsplash.com/photo-1568671566370-49b36c5c7805?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxoaWdod2F5JTIwYnJpZGdlJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc3NTkzMDQ4OXww&ixlib=rb-4.1.0&q=85"
    },
    {
        "title": "NH48 Safety Enhancement",
        "description": "Comprehensive road safety upgrade including signage, barriers, and lighting systems along National Highway 48.",
        "category": "Road Safety",
        "location": "Gujarat-Maharashtra",
        "year": "2024",
        "image_url": "https://images.unsplash.com/photo-1763569026025-17f15c1012a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwyfHxyb2FkJTIwc2FmZXR5JTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc3NTkzMDQ4OXww&ixlib=rb-4.1.0&q=85"
    },
    {
        "title": "Pune-Solapur Highway Maintenance",
        "description": "Annual maintenance and resurfacing project ensuring optimal road conditions.",
        "category": "Highway Maintenance",
        "location": "Pune-Solapur",
        "year": "2023-2024",
        "image_url": "https://images.unsplash.com/photo-1758551470883-af58f1556bfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwYWVyaWFsfGVufDB8fHx8MTc3NTkzMDUwMXww&ixlib=rb-4.1.0&q=85"
    },
    {
        "title": "Konkan Coastal Highway",
        "description": "New highway construction project connecting coastal regions with improved accessibility and tourism infrastructure.",
        "category": "Highway Construction",
        "location": "Konkan Region",
        "year": "2024-2025",
        "image_url": "https://images.unsplash.com/photo-1758551470883-af58f1556bfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwYWVyaWFsfGVufDB8fHx8MTc3NTkzMDUwMXww&ixlib=rb-4.1.0&q=85"
    },
    {
        "title": "Aurangabad Smart City Bridges",
        "description": "Multiple pedestrian and vehicular bridge projects as part of Aurangabad Smart City initiative.",
        "category": "Bridge Construction",
        "location": "Aurangabad",
        "year": "2023",
        "image_url": "https://images.unsplash.com/photo-1568671566370-49b36c5c7805?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxoaWdod2F5JTIwYnJpZGdlJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc3NTkzMDQ4OXww&ixlib=rb-4.1.0&q=85"
    }
]

for project in projects:
    try:
        response = requests.post(f"{API_URL}/api/projects", json=project)
        if response.status_code == 200:
            print(f"✓ Added: {project['title']}")
        else:
            print(f"✗ Failed: {project['title']} - {response.status_code}")
    except Exception as e:
        print(f"✗ Error adding {project['title']}: {str(e)}")

print("\nSeeding completed!")
