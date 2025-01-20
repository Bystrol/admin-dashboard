import { database } from '@/database/client';
import { Collection } from 'mongodb';

interface UsersByDeviceResponse {
  _id: string;
  operationalSystem: 'windows' | 'macOS';
}

export const getUsersByDevice = async (): Promise<UsersByDeviceResponse[]> => {
  const db = await database();
  const collection: Collection<UsersByDeviceResponse> = db.collection('users');

  const usersByDevice = await collection.find({}).toArray();

  const usersByDeviceDto = usersByDevice.map((object) => ({
    ...object,
    _id: object._id.toString(),
  }));

  return usersByDeviceDto;
};
