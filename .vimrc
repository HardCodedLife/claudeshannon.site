" ============================================================================
" Minimal .vimrc for React + TypeScript Development (No Autocmd)
" Safe to use in project directory
" ============================================================================

" Basic Settings
" ============================================================================
set nocompatible              " Disable Vi compatibility
" NOTE: syntax and filetype must be in root _vimrc (see autocmd artifact)

" Display
set number                    " Show line numbers
set relativenumber            " Show relative line numbers
set showcmd                   " Show command in bottom bar
set cursorline                " Highlight current line
set showmatch                 " Highlight matching brackets
set wildmenu                  " Visual autocomplete for command menu
set laststatus=2              " Always show status line

" Indentation (React/TypeScript standard: 2 spaces)
set tabstop=2                 " Tab width
set shiftwidth=2              " Indent width
set softtabstop=2             " Spaces in tab
set expandtab                 " Use spaces instead of tabs
set autoindent                " Auto indent
set smartindent               " Smart indent for code

" Search
set incsearch                 " Search as you type
set hlsearch                  " Highlight search results
set ignorecase                " Case insensitive search
set smartcase                 " Case sensitive if uppercase present

" Performance
set lazyredraw                " Don't redraw during macros
set ttyfast                   " Fast terminal connection

" File Handling
set encoding=utf-8            " UTF-8 encoding
set autoread                  " Auto reload changed files
set hidden                    " Allow hidden buffers

" Backup and Swap
set nobackup                  " No backup files
set nowritebackup             " No backup before overwrite
set noswapfile                " No swap files

" Split Navigation (Ctrl + hjkl)
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" Clear search highlighting with Esc
nnoremap <esc> :noh<return><esc>

" Save with Ctrl+S (normal and insert mode)
nnoremap <C-s> :w<CR>
inoremap <C-s> <Esc>:w<CR>a

" Quick window splits
nnoremap <leader>v :vsplit<CR>
nnoremap <leader>h :split<CR>

" Status Line Configuration
" ============================================================================
set statusline=%f               " File path
set statusline+=\ %m            " Modified flag
set statusline+=\ %r            " Readonly flag
set statusline+=%=              " Right align
set statusline+=\ %y            " File type
set statusline+=\ %l/%L         " Line number / total lines
set statusline+=\ :%c           " Column number
set statusline+=\ %p%%          " Percentage through file

" Color Scheme (works without plugins)
" ============================================================================
colorscheme pablo               " Built-in color scheme
set background=dark             " Dark background

" Fix cursorline readability
highlight CursorLine ctermbg=236 guibg=#303030
highlight CursorLineNr ctermfg=yellow guifg=yellow

" Useful Commands for React Development
" ============================================================================

" Toggle between .tsx and corresponding .css file
nnoremap <leader>c :e %:r.module.css<CR>
nnoremap <leader>t :e %:r.tsx<CR>

" Quick comment toggle (add/remove //)
nnoremap <leader>/ :s/^/\/\/ <CR>:noh<CR>
vnoremap <leader>/ :s/^/\/\/ <CR>:noh<CR>
nnoremap <leader>? :s/^\/\/ //<CR>:noh<CR>
vnoremap <leader>? :s/^\/\/ //<CR>:noh<CR>

" Auto-close brackets and quotes
inoremap { {}<Left>
inoremap [ []<Left>
inoremap ( ()<Left>
inoremap " ""<Left>
inoremap ' ''<Left>
inoremap ` ``<Left>

" ============================================================================
" NOTE: File-type specific settings removed (use root config)
" Copy the autocmd section below to your C:\Users\admin\_vimrc
" ============================================================================
