ALTER TABLE surveys
  ADD COLUMN other_arts_orgs BOOLEAN,
  ADD COLUMN marketing_avenue VARCHAR(256),
  ADD COLUMN arts_websites VARCHAR(256),
  ADD COLUMN attend_if_not_free BOOLEAN,
  ADD COLUMN attended_previously BOOLEAN,
  ADD COLUMN years_attended_previously INTEGER,
  ADD COLUMN greenshow BOOLEAN,
  ADD COLUMN other_csc_events TEXT,
  ADD COLUMN transportation VARCHAR(256),
  ADD COLUMN age_group INTEGER,
  ADD COLUMN gender VARCHAR(256),
  ADD COLUMN attendees INTEGER,
  ADD COLUMN income INTEGER,
  ADD COLUMN ethnicity VARCHAR(256),
  ADD COLUMN residental_zipcode INTEGER,
  ADD COLUMN work_zipcode INTEGER,
  ADD COLUMN additional_comments TEXT
