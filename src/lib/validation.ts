import * as v from 'valibot'

export const EMAIL_QUERY_SCHEMA = v.object({
  email: v.pipe(v.string(), v.nonEmpty(), v.email()),
})
