import requests
import sys
import json
from datetime import datetime

class AtmagauravInfraAPITester:
    def __init__(self, base_url="https://infra-connect-6.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED")
        else:
            print(f"❌ {name} - FAILED: {details}")
        
        self.test_results.append({
            "test": name,
            "success": success,
            "details": details
        })

    def test_api_root(self):
        """Test API root endpoint"""
        try:
            response = requests.get(f"{self.base_url}/api/", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", Response: {data}"
            self.log_test("API Root", success, details)
            return success
        except Exception as e:
            self.log_test("API Root", False, str(e))
            return False

    def test_get_projects(self):
        """Test GET /api/projects endpoint"""
        try:
            response = requests.get(f"{self.base_url}/api/projects", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                projects = response.json()
                details += f", Projects count: {len(projects)}"
                
                # Check if we have the expected 6 seeded projects
                if len(projects) >= 6:
                    details += " (Expected 6+ projects found)"
                else:
                    details += f" (Expected 6+ projects, found {len(projects)})"
                
                # Validate project structure
                if projects:
                    first_project = projects[0]
                    required_fields = ['id', 'title', 'description', 'category', 'location', 'year', 'image_url']
                    missing_fields = [field for field in required_fields if field not in first_project]
                    if missing_fields:
                        details += f", Missing fields: {missing_fields}"
                        success = False
                    else:
                        details += ", Project structure valid"
            
            self.log_test("GET Projects", success, details)
            return success, response.json() if success else []
        except Exception as e:
            self.log_test("GET Projects", False, str(e))
            return False, []

    def test_create_project(self):
        """Test POST /api/projects endpoint"""
        test_project = {
            "title": "Test Highway Project",
            "description": "Test highway construction project for API testing",
            "category": "Highway Construction",
            "location": "Test Location, Maharashtra",
            "year": "2024",
            "image_url": "https://example.com/test-image.jpg"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/api/projects",
                json=test_project,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                created_project = response.json()
                details += f", Created project ID: {created_project.get('id', 'N/A')}"
                
                # Validate created project has all fields
                for key, value in test_project.items():
                    if created_project.get(key) != value:
                        success = False
                        details += f", Field mismatch: {key}"
                        break
            
            self.log_test("POST Project", success, details)
            return success
        except Exception as e:
            self.log_test("POST Project", False, str(e))
            return False

    def test_contact_submission(self):
        """Test POST /api/contact endpoint"""
        test_contact = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+91-9876543210",
            "subject": "Test Contact Submission",
            "message": "This is a test message for API testing purposes."
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/api/contact",
                json=test_contact,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                created_contact = response.json()
                details += f", Created contact ID: {created_contact.get('id', 'N/A')}"
                
                # Validate created contact has all fields
                for key, value in test_contact.items():
                    if created_contact.get(key) != value:
                        success = False
                        details += f", Field mismatch: {key}"
                        break
            
            self.log_test("POST Contact", success, details)
            return success
        except Exception as e:
            self.log_test("POST Contact", False, str(e))
            return False

    def test_get_contacts(self):
        """Test GET /api/contact endpoint"""
        try:
            response = requests.get(f"{self.base_url}/api/contact", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                contacts = response.json()
                details += f", Contacts count: {len(contacts)}"
                
                # Validate contact structure if any exist
                if contacts:
                    first_contact = contacts[0]
                    required_fields = ['id', 'name', 'email', 'subject', 'message']
                    missing_fields = [field for field in required_fields if field not in first_contact]
                    if missing_fields:
                        details += f", Missing fields: {missing_fields}"
                        success = False
                    else:
                        details += ", Contact structure valid"
            
            self.log_test("GET Contacts", success, details)
            return success
        except Exception as e:
            self.log_test("GET Contacts", False, str(e))
            return False

    def test_invalid_endpoints(self):
        """Test invalid endpoints return proper errors"""
        try:
            response = requests.get(f"{self.base_url}/api/nonexistent", timeout=10)
            success = response.status_code == 404
            details = f"Status: {response.status_code} (Expected 404)"
            self.log_test("Invalid Endpoint", success, details)
            return success
        except Exception as e:
            self.log_test("Invalid Endpoint", False, str(e))
            return False

    def run_all_tests(self):
        """Run all backend API tests"""
        print("🚀 Starting Atmagaurav Infra Backend API Tests")
        print("=" * 60)
        
        # Test API connectivity first
        if not self.test_api_root():
            print("❌ API root test failed - stopping further tests")
            return False
        
        # Test core endpoints
        self.test_get_projects()
        self.test_create_project()
        self.test_contact_submission()
        self.test_get_contacts()
        self.test_invalid_endpoints()
        
        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 Test Summary: {self.tests_passed}/{self.tests_run} tests passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All backend tests passed!")
            return True
        else:
            print(f"⚠️  {self.tests_run - self.tests_passed} tests failed")
            return False

def main():
    tester = AtmagauravInfraAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())