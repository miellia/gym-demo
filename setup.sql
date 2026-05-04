-- Run this in your Supabase SQL Editor to set up the leads table

create table leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text not null,
  plan text default 'Not Specified',
  status text default 'new'
);

-- Disable RLS to allow anonymous inserts (Required for MVP/Demo)
alter table leads disable row level security;
