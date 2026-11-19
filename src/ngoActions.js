import { supabase } from './lib/supabase'


export async function setPickupStatus(id, status) {
  const { error } = await supabase.rpc('update_pickup', { p_id: id, p_status: status })
  if (error) throw new Error(error.message)
}

export async function declineListing(id) {
  const { error } = await supabase.rpc('decline_listing', { p_id: id })
  if (error) throw new Error(error.message)
}