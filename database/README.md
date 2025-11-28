# Database Schema

This directory contains the database schema for the Lendit application.

## Files

- `schema.sql` - Complete database schema with all tables and relationships

## Database Structure

### Core Tables

1. **users** - User accounts (lenders and renters)
2. **locations** - Geographic locations for rental items
3. **rental_items** - Items available for rent
4. **item_images** - Images associated with rental items
5. **rentals** - Rental transactions
6. **forum_posts** - Community forum posts
7. **forum_comments** - Comments on forum posts
8. **user_favorites** - User's favorite items
9. **reviews** - Reviews and ratings for users and rentals

## Setup Instructions

### PostgreSQL

```bash
psql -U postgres -d lendit < schema.sql
```

### MySQL

```bash
mysql -u root -p lendit < schema.sql
```

### SQLite

```bash
sqlite3 lendit.db < schema.sql
```

## Notes

- All IDs use VARCHAR(36) to support UUID format
- Timestamps are automatically managed
- Foreign key constraints ensure data integrity
- Indexes are created for common query patterns
- The schema is designed to be database-agnostic but may need minor adjustments for specific databases

