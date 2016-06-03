

/* Allowed flush values; see deflate() and inflate() below for details */
export var Z_NO_FLUSH        = 0;
export var Z_PARTIAL_FLUSH   = 1;
export var Z_SYNC_FLUSH      = 2;
export var Z_FULL_FLUSH      = 3;
export var Z_FINISH          = 4;
export var Z_BLOCK           = 5;
export var Z_TREES           = 6;

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
export var Z_OK              =  0;
export var Z_STREAM_END      =  1;
export var Z_NEED_DICT       =  2;
export var Z_ERRNO           = -1;
export var Z_STREAM_ERROR    = -2;
export var Z_DATA_ERROR      = -3;
//export var Z_MEM_ERROR     = -4;
export var Z_BUF_ERROR       = -5;
//export var Z_VERSION_ERROR = -6;

/* compression levels */
export var Z_NO_COMPRESSION       =  0;
export var Z_BEST_SPEED           =  1;
export var Z_BEST_COMPRESSION     =  9;
export var Z_DEFAULT_COMPRESSION  = -1;

export var Z_FILTERED             =  1;
export var Z_HUFFMAN_ONLY         =  2;
export var Z_RLE                  =  3;
export var Z_FIXED                =  4;
export var Z_DEFAULT_STRATEGY     =  0;

/* Possible values of the data_type field (though see inflate()) */
export var Z_BINARY                = 0;
export var Z_TEXT                  = 1;
//export var Z_ASCII               = 1; // = Z_TEXT (deprecated)
export var Z_UNKNOWN               = 2;

/* The deflate compression method */
export var Z_DEFLATED              = 8;
//export var Z_NULL                = null; // Use -1 or null inline, depending on var type
