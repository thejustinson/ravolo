const table = {
    "developers": {
      "developer_id": "string",          // Unique identifier for the developer
      "wallet_address": "string",        // Solana wallet address of the developer
      "username": "string",              // Developer's chosen username (optional)
      "email": "string",                 // Developer's email address (optional)
      "created_at": "timestamp",         // When the developer account was created
      "updated_at": "timestamp"          // Last update to the developer profile
    },
  
    "players": {
      "player_id": "string",             // Unique identifier for the player
      "wallet_address": "string",        // Solana wallet address of the player
      "username": "string",              // Player's chosen username
      "email": "string",                 // Player's email address (optional)
      "bio": "string",                   // Short biography or description (optional)
      "created_at": "timestamp",         // When the player account was created
      "updated_at": "timestamp"          // Last update to the player profile
    },
  
    "games": {
      "id": "string",               // Unique identifier for the game
      "developer_id": "string",          // Reference to the developer who created the game
      "game_name": "string",             // Name of the game
      "description": "string",           // Short description of the game
      "genre": "string",                 // Game genre (e.g., RPG, action)
      "thumbnail_url": "string",         // Link to the thumbnail image of the game
      "status": "string",                // Game status: "active", "inactive"
      "tags": ["string"],                // Array of tags for easier search
      "asset_integration_rules": "jsonb", // Rules for how assets integrate with the game
      "play_link": "string",             // Link to where users can play the game
      "created_at": "timestamp",         // When the game was added to the platform
      "updated_at": "timestamp"          // Last update to the game metadata
    },
  
    "collections": {
      "id": "string",         // Unique identifier for the collection
      "game_id": "string",               // Reference to the game this collection belongs to
      "name": "string",       // Name of the collection
      "description": "string",           // Description of the collection
      "address": "string",                // Address of the collection
      "symbol": "string",                // Short symbol or code for the collection
      "thumbnail_url": "string",         // URL to the collection's thumbnail
      "metadata_uri": "string",          // URI for the collection's metadata
      "royalty_percentage": "number",    // Royalty percentage for secondary sales
      "created_at": "timestamp",         // When the collection was created
      "updated_at": "timestamp"          // Last update to the collection
    },
  
    "assets": {
      "asset_id": "string",              // Unique identifier for the asset
      "collection_id": "string",         // Reference to the collection this asset belongs to
      "token_address": "string",         // Solana token address of the asset
      "asset_name": "string",            // Name of the asset
      "description": "string",           // Description of the asset
      "image_url": "string",             // URL to the asset's image
      "metadata_uri": "string",          // URI for the asset's metadata
      "attributes": "json",              // JSON object of asset attributes
      "rarity_score": "number",          // Calculated rarity score of the asset
      "current_owner": "string",         // Wallet address of the current owner
      "created_at": "timestamp",         // When the asset was created
      "updated_at": "timestamp"          // Last update to the asset
    },
  
    "asset_transfers": {
      "transfer_id": "string",           // Unique identifier for the transfer
      "asset_id": "string",              // Reference to the transferred asset
      "from_address": "string",          // Wallet address of the sender
      "to_address": "string",            // Wallet address of the recipient
      "transaction_hash": "string",      // Hash of the transfer transaction
      "transfer_time": "timestamp",      // When the transfer occurred
      "price": "number",                 // Price of the transfer (if applicable)
      "currency": "string"               // Currency used for the transfer
    },
  
    "asset_evolutions": {
      "evolution_id": "string",          // Unique identifier for the evolution event
      "asset_id": "string",              // Reference to the evolved asset
      "from_state": "json",              // Previous state of the asset
      "to_state": "json",                // New state of the asset after evolution
      "evolution_trigger": "string",     // What triggered the evolution
      "evolution_time": "timestamp",     // When the evolution occurred
      "game_id": "string"                // In which game the evolution occurred
    },
  
    "player_game_data": {
      "data_id": "string",               // Unique identifier for the player-game data entry
      "player_id": "string",             // Reference to the player
      "game_id": "string",               // Reference to the game
      "last_played": "timestamp",        // When the player last interacted with the game
      "playtime": "number",              // Total playtime in seconds
      "achievements": ["string"],        // Array of achieved milestones or badges
      "game_specific_data": "json",      // Any additional game-specific data
      "created_at": "timestamp",         // When the player first interacted with the game
      "updated_at": "timestamp"          // Last update to the player's game data
    },
  
    "asset_borrowings": {
      "borrowing_id": "string",          // Unique identifier for the borrowing event
      "asset_id": "string",              // Reference to the borrowed asset
      "lender_id": "string",             // Reference to the asset owner (lender)
      "borrower_id": "string",           // Reference to the borrower
      "game_id": "string",               // Reference to the game where the asset is being used
      "start_time": "timestamp",         // When the borrowing period started
      "end_time": "timestamp",           // When the borrowing period ends
      "terms": "json",                   // JSON object detailing borrowing terms
      "status": "string",                // Status of borrowing: "active", "completed", "cancelled"
      "created_at": "timestamp",         // When the borrowing was initiated
      "updated_at": "timestamp"          // Last update to the borrowing record
    }
  }