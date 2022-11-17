puts "Clearing Database 💥💥💥"

User.destroy_all
Profile.destroy_all

puts "Seeding Database 🌱🍃🌱🍃🌱🍃"

puts "Creating Users 👤"

User.create(username: "BMac", password: "dragon")
Profile.create(user_id: User.last.id, name: "Ben McShane", friend_code: 100, bio: "Hi Friends!", company: "I wish...", job: "Don't rub it in!", school: "Flatiron", email: "benjaminmartinmc@gmail.com", address: "123 Nunya Blvd", phone_no: "800-222-1222")
Portrait.create(profile_id: Profile.last.id, img_url: "https://static01.nyt.com/images/2022/11/07/us/07xp-toad1/07xp-toad1-jumbo.jpg?quality=75&auto=webp" )
Link.create(profile_id: Profile.last.id, url: "https://www.linkedin.com/in/benjamin-mcshane/", name: "LinkedIn", description: "My LinkedIn Page")
Link.create(profile_id: Profile.last.id, url: "https://github.com/BMMcShane", name: "GitHub", description: "My Github")
Link.create(profile_id: Profile.last.id, url: "https://dev.to/bmmcshane", name: "DEV Blog", description: "My Dev Blog")



User.create(username: "admin", password: "password")
Profile.create(user_id: User.last.id, name: nil, friend_code: 101, bio: nil, company: nil, job: nil, school: nil, email: nil, address: nil, phone_no: nil)
Portrait.create(profile_id: Profile.last.id, img_url: nil )



puts "Creating Sample Cards 💭💭💭"

Card.create(profile_id: 1, card_name: "Business", customization_info: "Blah")
Card.create(profile_id: 2, card_name: "Pleasure", customization_info: "Blah Blah")



puts "Creating Sample Notifications ❗❗❗"
Notification.create(profile_id: 2, kind: 1)
Request.create(notification_id: Notification.last.id, friend_id: 1)
Notification.create(profile_id: 2, kind: 2)
Ping.create(notification_id: Notification.last.id, collector_id: 1, card_id: 2)

puts "✅✅✅ Finished Seeding ✅✅✅"


