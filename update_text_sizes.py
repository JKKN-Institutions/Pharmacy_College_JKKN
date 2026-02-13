#!/usr/bin/env python3
"""
Script to update text sizes in all page.tsx files according to text-size.md documentation patterns.
Removes xs: breakpoints and applies progressive scaling.
"""

import os
import re
from pathlib import Path

# Define the root directory
ROOT_DIR = Path(r"d:\Deepakkumar\college_websites\Pharmacy_College\app")

# Files that have already been updated (exclude these)
ALREADY_UPDATED = {
    "page.tsx",  # root page
    "b-pharmacy", "m-pharmacy", "b-pharmacy-lateral-entry", "nss",
    "library", "class-room", "hostel", "wifi", "transport", "sports", "seminar-hall"
}

def should_update_file(file_path):
    """Check if file should be updated."""
    # Get the parent directory name
    parent_name = file_path.parent.name

    # Skip if already updated
    if parent_name in ALREADY_UPDATED:
        return False

    # Skip if it's the root page.tsx
    if file_path.parent == ROOT_DIR and file_path.name == "page.tsx":
        return False

    return True

def update_text_sizes(content):
    """Update text sizes according to documentation patterns."""

    # Remove all xs: breakpoints
    content = re.sub(r'\bxs:px-\d+\s+', '', content)
    content = re.sub(r'\bxs:text-\w+\s+', '', content)
    content = re.sub(r'\bxs:-mx-\d+\s+', '', content)

    # Update common text size patterns
    replacements = [
        # Page titles (h1) - text-2xl sm:text-4xl lg:text-5xl -> text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        (r'text-2xl\s+sm:text-4xl\s+lg:text-5xl', 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'),

        # Section headings (h2) - Add md:text-3xl where missing
        (r'text-xl\s+sm:text-2xl\s+font-bold', 'text-xl sm:text-2xl md:text-3xl font-bold'),

        # Body text - text-sm sm:text-base -> text-sm sm:text-base md:text-lg
        (r'text-sm\s+sm:text-base(?!\s+md:)', 'text-sm sm:text-base md:text-lg'),

        # Card titles - text-base sm:text-lg -> text-base sm:text-lg md:text-xl lg:text-2xl
        (r'text-base\s+sm:text-lg(?!\s+md:)', 'text-base sm:text-lg md:text-xl lg:text-2xl'),

        # Subsection headings - text-lg sm:text-xl -> text-lg sm:text-xl md:text-2xl
        (r'text-lg\s+sm:text-xl(?!\s+md:)', 'text-lg sm:text-xl md:text-2xl'),

        # Table text - text-sm -> text-xs sm:text-sm md:text-base (for tables)
        # (already handled by other patterns)

        # Button text - add md:text-lg where appropriate
        (r'text-base\s+md:text-lg\s+lg:text-xl', 'text-base md:text-lg'),
    ]

    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content)

    return content

def process_file(file_path):
    """Process a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file needs updating (has xs: breakpoints)
        if 'xs:' not in content:
            return False, "No xs: breakpoints found"

        # Update content
        updated_content = update_text_sizes(content)

        # Write back if changed
        if updated_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            return True, "Updated successfully"
        else:
            return False, "No changes needed"

    except Exception as e:
        return False, f"Error: {str(e)}"

def main():
    """Main function to process all files."""
    # Find all page.tsx files
    page_files = list(ROOT_DIR.rglob("page.tsx"))

    updated_count = 0
    skipped_count = 0
    error_count = 0

    print(f"Found {len(page_files)} page.tsx files")
    print("="* 60)

    for file_path in sorted(page_files):
        if not should_update_file(file_path):
            skipped_count += 1
            continue

        relative_path = file_path.relative_to(ROOT_DIR.parent)
        success, message = process_file(file_path)

        if success:
            updated_count += 1
            print(f"✓ {relative_path}: {message}")
        elif "Error" in message:
            error_count += 1
            print(f"✗ {relative_path}: {message}")
        else:
            print(f"- {relative_path}: {message}")

    print("="* 60)
    print(f"Summary:")
    print(f"  Updated: {updated_count}")
    print(f"  Skipped: {skipped_count}")
    print(f"  Errors: {error_count}")
    print(f"  Total: {len(page_files)}")

if __name__ == "__main__":
    main()
