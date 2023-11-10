import mongoose, { Schema, Document } from 'mongoose';

interface VoiceActor {
  character: string;
  actor: string;
}

interface StaffMember {
  role: string;
  name: string;
}

interface Anime {
  Rank: string;
  Name: string;
  Japanese_name: string;
  Type: string;
  Episodes: string;
  Studio: string;
  Release_season: string;
  Tags: string[];
  Rating: string;
  Release_year: number;
  End_year?: number;
  Description: string;
  Content_Warning: string;
  Related_Manga: string;
  Related_anime: string;
  Voice_actors: VoiceActor[];
  staff: StaffMember[];
}

const voiceActorSchema = new Schema<VoiceActor>({
  character: String,
  actor: String,
});

const staffMemberSchema = new Schema<StaffMember>({
  role: String,
  name: String,
});

const animeSchema = new Schema<Anime>({
  Rank: String,
  Name: String,
  Japanese_name: String,
  Type: String,
  Episodes: String,
  Studio: String,
  Release_season: String,
  Tags: [String],
  Rating: String,
  Release_year: Number,
  End_year: { type: Number, default: null },
  Description: String,
  Content_Warning: String,
  Related_Manga: String,
  Related_anime: String,
  Voice_actors: [voiceActorSchema],
  staff: [staffMemberSchema],
});

const AnimeModel = mongoose.model<Anime & Document>('Anime', animeSchema);

export default AnimeModel;
