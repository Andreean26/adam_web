from playwright.sync_api import sync_playwright, expect
import time

def verify_animations(page):
    print("Navigating to home page...")
    page.goto("http://localhost:3000")

    # Wait for the page to load
    page.wait_for_load_state("networkidle")

    print("Checking Hero Section...")
    # The Hero section has a ScrollReveal on the text.
    # Let's wait a moment for the initial animation to complete.
    time.sleep(1)

    # Take a screenshot of the top
    page.screenshot(path="verification/hero_section.png")
    print("Hero section screenshot taken.")

    # Scroll down to Services section to trigger animations
    print("Scrolling to Services...")
    # Using a locator text common in the services section or just scrolling
    # Looking at previous file reads, there is a "Services" section.

    # Let's scroll by pixels to simulate user scrolling
    page.mouse.wheel(0, 800)
    time.sleep(1) # Wait for animation

    page.screenshot(path="verification/scrolled_view.png")
    print("Scrolled view screenshot taken.")

if __name__ == "__main__":
    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_animations(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
