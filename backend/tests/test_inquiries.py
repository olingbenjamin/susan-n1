"""Backend tests for inquiries endpoints."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://design-export-lab.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200


def test_create_inquiry_valid(client):
    payload = {
        "name": "TEST_Jane Doe",
        "email": "test_jane@example.com",
        "organization": "TEST_Acme Corp",
        "event_type": "Keynote",
        "message": "We would love a leadership keynote.",
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["organization"] == payload["organization"]
    assert data["event_type"] == payload["event_type"]
    assert data["message"] == payload["message"]
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data and data["created_at"]

    # GET verifies persistence + newest-first sort
    g = client.get(f"{API}/inquiries")
    assert g.status_code == 200
    items = g.json()
    assert any(i["id"] == data["id"] for i in items)
    # Newest first: our inserted item should be at or near the top
    assert items[0]["id"] == data["id"]


def test_create_inquiry_invalid_email(client):
    payload = {
        "name": "TEST_Bad Email",
        "email": "not-an-email",
        "organization": "TEST_Org",
        "event_type": "Workshop",
        "message": "hi",
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 422


def test_create_inquiry_missing_fields(client):
    r = client.post(f"{API}/inquiries", json={"name": "TEST_x"})
    assert r.status_code == 422


def test_list_inquiries(client):
    r = client.get(f"{API}/inquiries")
    assert r.status_code == 200
    assert isinstance(r.json(), list)
