// THIS IS A GENERATED FILE, use `npm run codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Activity = {
  __typename?: 'Activity';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  archived?: Maybe<Scalars['Boolean']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  cropProfile?: Maybe<CropProfile>;
  cropProfileId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  totalCost?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ActivityEquipment = {
  __typename?: 'ActivityEquipment';
  activity?: Maybe<Activity>;
  activityId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  equipment?: Maybe<Equipment>;
  equipmentId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  totalCostPerDay?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ActivityInput = {
  __typename?: 'ActivityInput';
  activity?: Maybe<Activity>;
  activityId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  input?: Maybe<Input>;
  inputId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  totalCost?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AddActivityToCalendar = {
  activityId: Scalars['String']['input'];
  endTime: Scalars['Date']['input'];
  expectedOutput?: InputMaybe<Scalars['Float']['input']>;
  farmLotId: Scalars['String']['input'];
  startTime: Scalars['Date']['input'];
};

export type Admin = {
  __typename?: 'Admin';
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  hashedRt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isTwoFactorAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AdminInvite = {
  __typename?: 'AdminInvite';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AdminInviteDetails = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  roleId: Scalars['String']['input'];
};

export type AdminLoginDetails = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  twoFACode?: InputMaybe<Scalars['String']['input']>;
};

export type AdminSignUpDetails = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Calendar = {
  __typename?: 'Calendar';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  calendarActivity?: Maybe<Array<Maybe<CalendarActivity>>>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  farmLot?: Maybe<FarmLot>;
  farmLotId?: Maybe<Scalars['String']['output']>;
  farmer?: Maybe<Farmer>;
  farmerId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type CalendarActivity = {
  __typename?: 'CalendarActivity';
  activity?: Maybe<Activity>;
  activityId?: Maybe<Scalars['String']['output']>;
  archived?: Maybe<Scalars['Boolean']['output']>;
  calendar?: Maybe<Calendar>;
  calendarId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  endTime?: Maybe<Scalars['Date']['output']>;
  expectedOutput?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['Date']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type CalendarActivityTemplate = {
  __typename?: 'CalendarActivityTemplate';
  activity?: Maybe<Activity>;
  activityId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  endTime?: Maybe<Scalars['Date']['output']>;
  expectedOutput?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['Date']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type CalendarByFarmLotResponse = {
  __typename?: 'CalendarByFarmLotResponse';
  activitiesForDay?: Maybe<Array<Maybe<CalendarActivity>>>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type CalendarByFarmerFarmlotResponse = {
  __typename?: 'CalendarByFarmerFarmlotResponse';
  activitiesForDay?: Maybe<Array<Maybe<FarmLotActivitiesForDay>>>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type ChangeAdminPassword = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type ChangeFarmerPassword = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type Complaint = {
  __typename?: 'Complaint';
  archived?: Maybe<Scalars['Boolean']['output']>;
  complaint?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  farmer?: Maybe<Farmer>;
  farmerId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  resolved?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Cooperative = {
  __typename?: 'Cooperative';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  archived?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  farmLots?: Maybe<Array<Maybe<FarmLot>>>;
  farmerInvites?: Maybe<Array<Maybe<FarmerInvite>>>;
  farmers?: Maybe<Array<Maybe<Farmer>>>;
  geographicArea?: Maybe<GeographicArea>;
  geographicAreaId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  landGroup?: Maybe<LandGroup>;
  landGroupId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type CreateActivity = {
  activityEquipment?: InputMaybe<Array<CreateActivityEquipment>>;
  activityInput?: InputMaybe<Array<CreateActivityInput>>;
  cost: Scalars['Float']['input'];
  cropProfileId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateActivityEquipment = {
  equipmentId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};

export type CreateActivityInput = {
  inputId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};

export type CreateCalendarActivityTemplateInput = {
  activityId: Scalars['String']['input'];
  endTime: Scalars['Date']['input'];
  startTime: Scalars['Date']['input'];
};

export type CreateComplaint = {
  complaint: Scalars['String']['input'];
  description: Scalars['String']['input'];
};

export type CreateCooperative = {
  geographicAreaId: Scalars['String']['input'];
  landGroupId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateCropProfile = {
  cropName: Scalars['String']['input'];
  lifeCycle: Scalars['String']['input'];
};

export type CreateEquipment = {
  costPerDay: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type CreateFarmCalendarData = {
  cropProfileId: Scalars['String']['input'];
  farmLotId: Scalars['String']['input'];
};

export type CreateFarmLot = {
  coorperativeId: Scalars['String']['input'];
  cropProfileId: Scalars['String']['input'];
  geographicAreaId: Scalars['String']['input'];
  landGroupId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateFarmOutput = {
  cropProfileId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  farmLotId: Scalars['String']['input'];
  outputUnitId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  warehouseId: Scalars['String']['input'];
};

export type CreateFarmWorker = {
  farmerId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateFarmerProfile = {
  coorperativeId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  farmLotIds: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateFarmerResponse = {
  __typename?: 'CreateFarmerResponse';
  farmerProfile?: Maybe<Farmer>;
  passcode?: Maybe<Scalars['String']['output']>;
};

export type CreateInput = {
  cost: Scalars['Float']['input'];
  inputCategoryId: Scalars['String']['input'];
  inputUnitId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateLandGroup = {
  geographicAreaId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateRole = {
  description?: InputMaybe<Scalars['String']['input']>;
  roleName: Scalars['String']['input'];
};

export type CreateWarehouse = {
  costPerDay: Scalars['Float']['input'];
  geographicAreaId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CropProfile = {
  __typename?: 'CropProfile';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  archived?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  cropName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lifeCycle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Equipment = {
  __typename?: 'Equipment';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  archived?: Maybe<Scalars['Boolean']['output']>;
  costPerDay?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type FarmLot = {
  __typename?: 'FarmLot';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  archived?: Maybe<Scalars['Boolean']['output']>;
  coorperative?: Maybe<Cooperative>;
  coorperativeId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  farmer?: Maybe<Farmer>;
  farmerInvite?: Maybe<FarmerInvite>;
  geographicArea?: Maybe<GeographicArea>;
  geographicAreaId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  landGroup?: Maybe<LandGroup>;
  landGroupId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type FarmLotActivitiesForDay = {
  __typename?: 'FarmLotActivitiesForDay';
  calendarActivity?: Maybe<CalendarActivity>;
  farmLotname?: Maybe<Scalars['String']['output']>;
};

export type FarmOutput = {
  __typename?: 'FarmOutput';
  calendar?: Maybe<Calendar>;
  calendarId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  cropProfile?: Maybe<CropProfile>;
  cropProfileId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  farmLot?: Maybe<FarmLot>;
  farmLotId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  outputUnit?: Maybe<Unit>;
  outputUnitId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  warehouse?: Maybe<Warehouse>;
  warehouseId?: Maybe<Scalars['String']['output']>;
};

export type FarmWorker = {
  __typename?: 'FarmWorker';
  archived?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  farmLot?: Maybe<FarmLot>;
  farmLotId?: Maybe<Scalars['String']['output']>;
  farmer?: Maybe<Farmer>;
  farmerId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Farmer = {
  __typename?: 'Farmer';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  archived?: Maybe<Scalars['Boolean']['output']>;
  coorperative?: Maybe<Cooperative>;
  coorperativeId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  farmLots?: Maybe<Array<Maybe<FarmLot>>>;
  hash?: Maybe<Scalars['String']['output']>;
  hashedRt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type FarmerInvite = {
  __typename?: 'FarmerInvite';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  coorperative?: Maybe<Cooperative>;
  coorperativeId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  farmLot?: Maybe<FarmLot>;
  farmLotId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitePin?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type FarmerLoginDetails = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type GenerateTwoFaResponse = {
  __typename?: 'GenerateTwoFAResponse';
  otpAuthUrl: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

export type GeographicArea = {
  __typename?: 'GeographicArea';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  archived?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Input = {
  __typename?: 'Input';
  cost?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  inpputCategory?: Maybe<InputCategory>;
  inputCategoryId?: Maybe<Scalars['String']['output']>;
  inputUnit?: Maybe<Unit>;
  inputUnitId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type InputCategory = {
  __typename?: 'InputCategory';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  input?: Maybe<Array<Maybe<Input>>>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type LandGroup = {
  __typename?: 'LandGroup';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  archived?: Maybe<Scalars['Boolean']['output']>;
  calendar?: Maybe<Calendar>;
  coorperative?: Maybe<Cooperative>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  farmLots?: Maybe<Array<Maybe<FarmLot>>>;
  geographicArea?: Maybe<GeographicArea>;
  geographicAreaId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addActivityToFarmCalendar?: Maybe<Scalars['Boolean']['output']>;
  adminInvite?: Maybe<AdminInvite>;
  adminLogin: Token;
  adminLogout?: Maybe<Scalars['Boolean']['output']>;
  adminRefreshToken: Token;
  adminSignUpAfterInvite: Token;
  adminSignup: Token;
  archiveActivity?: Maybe<Scalars['Boolean']['output']>;
  archiveCalendarActivity?: Maybe<Scalars['Boolean']['output']>;
  archiveComplaint?: Maybe<Scalars['Boolean']['output']>;
  archiveCropProfile?: Maybe<Scalars['Boolean']['output']>;
  archiveEquipment?: Maybe<Scalars['Boolean']['output']>;
  archiveFarmLot?: Maybe<Scalars['Boolean']['output']>;
  archiveFarmOutput?: Maybe<Scalars['Boolean']['output']>;
  archiveFarmWorker?: Maybe<Scalars['Boolean']['output']>;
  archiveGeoArea?: Maybe<Scalars['Boolean']['output']>;
  archiveGeoCorp?: Maybe<Scalars['Boolean']['output']>;
  archiveInput?: Maybe<Scalars['Boolean']['output']>;
  archiveInputCategory?: Maybe<Scalars['Boolean']['output']>;
  archiveLandGroup?: Maybe<Scalars['Boolean']['output']>;
  archiveRole?: Maybe<Scalars['Boolean']['output']>;
  archiveWarehouse?: Maybe<Scalars['Boolean']['output']>;
  assignFarmLotToFarmer?: Maybe<Scalars['Boolean']['output']>;
  changeAdminPassword?: Maybe<Scalars['Boolean']['output']>;
  changeFarmerPassword?: Maybe<Scalars['Boolean']['output']>;
  createActivity?: Maybe<Activity>;
  createCalendarActivityTemplate?: Maybe<CalendarActivityTemplate>;
  createComplaint?: Maybe<Complaint>;
  createCropProfile?: Maybe<CropProfile>;
  createEquipment?: Maybe<Equipment>;
  createFarmCalendar?: Maybe<Calendar>;
  createFarmLot?: Maybe<FarmLot>;
  createFarmOutput?: Maybe<FarmOutput>;
  createFarmWorker?: Maybe<FarmWorker>;
  createFarmerProfile?: Maybe<CreateFarmerResponse>;
  createGeoArea?: Maybe<GeographicArea>;
  createGeoCorp?: Maybe<Cooperative>;
  createInput?: Maybe<Input>;
  createInputCategory?: Maybe<InputCategory>;
  createLandGroup?: Maybe<LandGroup>;
  createRole?: Maybe<Role>;
  createUnit?: Maybe<Unit>;
  createWarehouse?: Maybe<Warehouse>;
  deleteActivity?: Maybe<Scalars['Boolean']['output']>;
  deleteAdmin?: Maybe<Scalars['Boolean']['output']>;
  deleteAllActivities?: Maybe<Scalars['Boolean']['output']>;
  deleteAllCropProfiles?: Maybe<Scalars['Boolean']['output']>;
  deleteAllEquipments?: Maybe<Scalars['Boolean']['output']>;
  deleteAllFarmLots?: Maybe<Scalars['Boolean']['output']>;
  deleteAllFarmWorkers?: Maybe<Scalars['Boolean']['output']>;
  deleteAllFarmerProfiles?: Maybe<Scalars['Boolean']['output']>;
  deleteAllGeoCorps?: Maybe<Scalars['Boolean']['output']>;
  deleteAllRoles?: Maybe<Scalars['Boolean']['output']>;
  deleteCalendarActivity?: Maybe<Scalars['Boolean']['output']>;
  deleteCalendarActivityTemplate?: Maybe<Scalars['Boolean']['output']>;
  deleteComplaint?: Maybe<Scalars['Boolean']['output']>;
  deleteCropProfile?: Maybe<Scalars['Boolean']['output']>;
  deleteEquipment?: Maybe<Scalars['Boolean']['output']>;
  deleteFarmLot?: Maybe<Scalars['Boolean']['output']>;
  deleteFarmOutput?: Maybe<Scalars['Boolean']['output']>;
  deleteFarmWorker?: Maybe<Scalars['Boolean']['output']>;
  deleteFarmerProfile?: Maybe<Scalars['Boolean']['output']>;
  deleteGeoArea?: Maybe<Scalars['Boolean']['output']>;
  deleteGeoCorp?: Maybe<Scalars['Boolean']['output']>;
  deleteInput?: Maybe<Scalars['Boolean']['output']>;
  deleteInputCategory?: Maybe<Scalars['Boolean']['output']>;
  deleteLandGroup?: Maybe<Scalars['Boolean']['output']>;
  deleteRole?: Maybe<Scalars['Boolean']['output']>;
  deleteUnit?: Maybe<Scalars['Boolean']['output']>;
  deleteWarehouse?: Maybe<Scalars['Boolean']['output']>;
  farmerLogin: Token;
  farmerLogout?: Maybe<Scalars['Boolean']['output']>;
  farmerSignUpAfterInvite: Token;
  generateQrCodeDataURL: Scalars['String']['output'];
  generateTwoFactorAuthSecret: GenerateTwoFaResponse;
  resolveComplaint?: Maybe<Scalars['Boolean']['output']>;
  turnOnTwoFactorAuth: Scalars['Boolean']['output'];
  updateActivity?: Maybe<Activity>;
  updateCalendarActiviity?: Maybe<Scalars['Boolean']['output']>;
  updateCalendarActivityTemplate?: Maybe<CalendarActivityTemplate>;
  updateComplaint?: Maybe<Complaint>;
  updateCropProfile?: Maybe<CropProfile>;
  updateEquipment?: Maybe<Equipment>;
  updateFarmLot?: Maybe<FarmLot>;
  updateFarmOutput?: Maybe<FarmOutput>;
  updateFarmWorker?: Maybe<FarmWorker>;
  updateGeoArea?: Maybe<GeographicArea>;
  updateGeoCorp?: Maybe<Cooperative>;
  updateInput?: Maybe<Input>;
  updateInputCategory?: Maybe<InputCategory>;
  updateLandGroup?: Maybe<LandGroup>;
  updateRole?: Maybe<Role>;
  updateUnit?: Maybe<Unit>;
  updateWarehouse?: Maybe<Warehouse>;
};


export type MutationAddActivityToFarmCalendarArgs = {
  input: AddActivityToCalendar;
};


export type MutationAdminInviteArgs = {
  input?: InputMaybe<AdminInviteDetails>;
};


export type MutationAdminLoginArgs = {
  input: AdminLoginDetails;
};


export type MutationAdminSignUpAfterInviteArgs = {
  adminInviteId: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationAdminSignupArgs = {
  input: AdminSignUpDetails;
};


export type MutationArchiveActivityArgs = {
  activityId: Scalars['String']['input'];
};


export type MutationArchiveCalendarActivityArgs = {
  calendarActivityId: Scalars['String']['input'];
};


export type MutationArchiveComplaintArgs = {
  complaintId: Scalars['String']['input'];
};


export type MutationArchiveCropProfileArgs = {
  cropProfileId: Scalars['String']['input'];
};


export type MutationArchiveEquipmentArgs = {
  equipmentId: Scalars['String']['input'];
};


export type MutationArchiveFarmLotArgs = {
  farmLotId: Scalars['String']['input'];
};


export type MutationArchiveFarmOutputArgs = {
  outputId: Scalars['String']['input'];
};


export type MutationArchiveFarmWorkerArgs = {
  farmWorkerId: Scalars['String']['input'];
};


export type MutationArchiveGeoAreaArgs = {
  geoAreaId: Scalars['String']['input'];
};


export type MutationArchiveGeoCorpArgs = {
  geoCorpId: Scalars['String']['input'];
};


export type MutationArchiveInputArgs = {
  inputId: Scalars['String']['input'];
};


export type MutationArchiveInputCategoryArgs = {
  categoryId: Scalars['String']['input'];
};


export type MutationArchiveLandGroupArgs = {
  landGroupId: Scalars['String']['input'];
};


export type MutationArchiveRoleArgs = {
  roleId: Scalars['String']['input'];
};


export type MutationArchiveWarehouseArgs = {
  warehouseId: Scalars['String']['input'];
};


export type MutationAssignFarmLotToFarmerArgs = {
  farmLotId: Scalars['String']['input'];
  farmerId: Scalars['String']['input'];
};


export type MutationChangeAdminPasswordArgs = {
  input: ChangeAdminPassword;
};


export type MutationChangeFarmerPasswordArgs = {
  input: ChangeFarmerPassword;
};


export type MutationCreateActivityArgs = {
  input: CreateActivity;
};


export type MutationCreateCalendarActivityTemplateArgs = {
  input?: InputMaybe<CreateCalendarActivityTemplateInput>;
};


export type MutationCreateComplaintArgs = {
  input: CreateComplaint;
};


export type MutationCreateCropProfileArgs = {
  input: CreateCropProfile;
};


export type MutationCreateEquipmentArgs = {
  input?: InputMaybe<CreateEquipment>;
};


export type MutationCreateFarmCalendarArgs = {
  input: CreateFarmCalendarData;
};


export type MutationCreateFarmLotArgs = {
  input: CreateFarmLot;
};


export type MutationCreateFarmOutputArgs = {
  input?: InputMaybe<CreateFarmOutput>;
};


export type MutationCreateFarmWorkerArgs = {
  input: CreateFarmWorker;
};


export type MutationCreateFarmerProfileArgs = {
  input: CreateFarmerProfile;
};


export type MutationCreateGeoAreaArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateGeoCorpArgs = {
  input?: InputMaybe<CreateCooperative>;
};


export type MutationCreateInputArgs = {
  input: CreateInput;
};


export type MutationCreateInputCategoryArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateLandGroupArgs = {
  input?: InputMaybe<CreateLandGroup>;
};


export type MutationCreateRoleArgs = {
  input: CreateRole;
};


export type MutationCreateUnitArgs = {
  unitName: Scalars['String']['input'];
};


export type MutationCreateWarehouseArgs = {
  input: CreateWarehouse;
};


export type MutationDeleteActivityArgs = {
  activityId: Scalars['String']['input'];
};


export type MutationDeleteAdminArgs = {
  adminProfileId: Scalars['String']['input'];
};


export type MutationDeleteCalendarActivityArgs = {
  calendarActivityId: Scalars['String']['input'];
};


export type MutationDeleteCalendarActivityTemplateArgs = {
  templateId: Scalars['String']['input'];
};


export type MutationDeleteComplaintArgs = {
  complaintId: Scalars['String']['input'];
};


export type MutationDeleteCropProfileArgs = {
  cropProfileId: Scalars['String']['input'];
};


export type MutationDeleteEquipmentArgs = {
  equipmentId: Scalars['String']['input'];
};


export type MutationDeleteFarmLotArgs = {
  farmLotId: Scalars['String']['input'];
};


export type MutationDeleteFarmOutputArgs = {
  outputId: Scalars['String']['input'];
};


export type MutationDeleteFarmWorkerArgs = {
  farmWorkerId: Scalars['String']['input'];
};


export type MutationDeleteFarmerProfileArgs = {
  farmerId: Scalars['String']['input'];
};


export type MutationDeleteGeoAreaArgs = {
  geoAreaId: Scalars['String']['input'];
};


export type MutationDeleteGeoCorpArgs = {
  geoCorpId: Scalars['String']['input'];
};


export type MutationDeleteInputArgs = {
  inputId: Scalars['String']['input'];
};


export type MutationDeleteInputCategoryArgs = {
  categoryId: Scalars['String']['input'];
};


export type MutationDeleteLandGroupArgs = {
  landGroupId: Scalars['String']['input'];
};


export type MutationDeleteRoleArgs = {
  roleId: Scalars['String']['input'];
};


export type MutationDeleteUnitArgs = {
  unitId: Scalars['String']['input'];
};


export type MutationDeleteWarehouseArgs = {
  warehouseId: Scalars['String']['input'];
};


export type MutationFarmerLoginArgs = {
  input: FarmerLoginDetails;
};


export type MutationFarmerSignUpAfterInviteArgs = {
  invitePasscode: Scalars['String']['input'];
};


export type MutationResolveComplaintArgs = {
  complaintId: Scalars['String']['input'];
};


export type MutationTurnOnTwoFactorAuthArgs = {
  twoFACode: Scalars['String']['input'];
};


export type MutationUpdateActivityArgs = {
  activityId: Scalars['String']['input'];
  input: UpdateActivity;
};


export type MutationUpdateCalendarActiviityArgs = {
  input: UpdateCalendarActivity;
};


export type MutationUpdateCalendarActivityTemplateArgs = {
  input?: InputMaybe<UpdateCalendarActivityTemplateInput>;
  templateId: Scalars['String']['input'];
};


export type MutationUpdateComplaintArgs = {
  complaintId: Scalars['String']['input'];
  input: UpdateComplaint;
};


export type MutationUpdateCropProfileArgs = {
  cropProfileId: Scalars['String']['input'];
  input?: InputMaybe<UpdateCropProfile>;
};


export type MutationUpdateEquipmentArgs = {
  equipmentId: Scalars['String']['input'];
  input: UpdateEquipment;
};


export type MutationUpdateFarmLotArgs = {
  farmLotId: Scalars['String']['input'];
  input: UpdateFarmLot;
};


export type MutationUpdateFarmOutputArgs = {
  input?: InputMaybe<UpdateFarmOutput>;
  outputId: Scalars['String']['input'];
};


export type MutationUpdateFarmWorkerArgs = {
  farmWorkerId: Scalars['String']['input'];
  input: UpdateFarmWorker;
};


export type MutationUpdateGeoAreaArgs = {
  geoAreaId: Scalars['String']['input'];
  input?: InputMaybe<UpdateGeographicArea>;
};


export type MutationUpdateGeoCorpArgs = {
  geoCorpId: Scalars['String']['input'];
  input?: InputMaybe<UpdateCooperative>;
};


export type MutationUpdateInputArgs = {
  input: UpdateInput;
  inputId: Scalars['String']['input'];
};


export type MutationUpdateInputCategoryArgs = {
  categoryId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateLandGroupArgs = {
  input: UpdateLandGroup;
  landGroupId: Scalars['String']['input'];
};


export type MutationUpdateRoleArgs = {
  input: UpdateRole;
  roleId: Scalars['String']['input'];
};


export type MutationUpdateUnitArgs = {
  unitId: Scalars['String']['input'];
  unitName: Scalars['String']['input'];
};


export type MutationUpdateWarehouseArgs = {
  input: UpdateWarehouse;
  warehouseId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getActivities?: Maybe<Array<Maybe<Activity>>>;
  getActivityByCropProfile?: Maybe<Array<Maybe<Activity>>>;
  getActivityById?: Maybe<Activity>;
  getAdminById: Admin;
  getAdminProfile?: Maybe<Admin>;
  getAdmins?: Maybe<Array<Maybe<Admin>>>;
  getCalendarActivityTemplateById?: Maybe<CalendarActivityTemplate>;
  getCalendarActivityTemplates?: Maybe<Array<Maybe<CalendarActivityTemplate>>>;
  getCalendarByFarmLot?: Maybe<Array<Maybe<CalendarByFarmLotResponse>>>;
  getCalendarById?: Maybe<Calendar>;
  getCalendars?: Maybe<Array<Maybe<Calendar>>>;
  getComplaintById?: Maybe<Complaint>;
  getComplaints?: Maybe<Array<Maybe<Complaint>>>;
  getComplaintsByFarmer?: Maybe<Array<Maybe<Complaint>>>;
  getComplaintsFromFarmer?: Maybe<Array<Maybe<Complaint>>>;
  getCropProfileById?: Maybe<CropProfile>;
  getCropProfiles?: Maybe<Array<Maybe<CropProfile>>>;
  getEquipmentById?: Maybe<Equipment>;
  getEquipments?: Maybe<Array<Maybe<Equipment>>>;
  getFarmLotById?: Maybe<FarmLot>;
  getFarmLotByLandGroup: Array<Maybe<FarmLot>>;
  getFarmLots: Array<Maybe<FarmLot>>;
  getFarmOutputByFarmLot?: Maybe<Array<Maybe<FarmOutput>>>;
  getFarmOutputById?: Maybe<FarmOutput>;
  getFarmOutputs?: Maybe<Array<Maybe<FarmOutput>>>;
  getFarmWorkerByFarmer?: Maybe<Array<Maybe<FarmWorker>>>;
  getFarmWorkerById?: Maybe<FarmWorker>;
  getFarmWorkers?: Maybe<Array<Maybe<FarmWorker>>>;
  getFarmerById: Farmer;
  getFarmerCalendarByFarmLot?: Maybe<Array<Maybe<CalendarByFarmerFarmlotResponse>>>;
  getFarmerProfileById?: Maybe<Farmer>;
  getFarmerProfiles: Array<Maybe<Farmer>>;
  getGeoAreaById?: Maybe<GeographicArea>;
  getGeoAreas: Array<Maybe<GeographicArea>>;
  getGeoCorpByArea: Array<Maybe<Cooperative>>;
  getGeoCorpById?: Maybe<Cooperative>;
  getGeoCorps: Array<Maybe<Cooperative>>;
  getInputById?: Maybe<Input>;
  getInputCategories?: Maybe<Array<Maybe<InputCategory>>>;
  getInputCategoryById?: Maybe<InputCategory>;
  getInputs?: Maybe<Array<Maybe<Input>>>;
  getLandGroupById?: Maybe<LandGroup>;
  getLandGroups: Array<Maybe<LandGroup>>;
  getLatestActivities?: Maybe<Array<Maybe<CalendarByFarmerFarmlotResponse>>>;
  getRoleById?: Maybe<Role>;
  getRoles: Array<Maybe<Role>>;
  getRolesForAdmin?: Maybe<Array<Maybe<Role>>>;
  getUnitById?: Maybe<Unit>;
  getUnits?: Maybe<Array<Maybe<Unit>>>;
  getUpcomingActivities?: Maybe<Array<Maybe<CalendarByFarmerFarmlotResponse>>>;
  getWarehouseById?: Maybe<Warehouse>;
  getWarehouses?: Maybe<Array<Maybe<Warehouse>>>;
};


export type QueryGetActivityByCropProfileArgs = {
  cropProfileId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetActivityByIdArgs = {
  activityId: Scalars['String']['input'];
};


export type QueryGetAdminProfileArgs = {
  adminProfileId: Scalars['String']['input'];
};


export type QueryGetCalendarActivityTemplateByIdArgs = {
  templateId: Scalars['String']['input'];
};


export type QueryGetCalendarByFarmLotArgs = {
  farmLotId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCalendarByIdArgs = {
  calendarId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetComplaintByIdArgs = {
  complaintId: Scalars['String']['input'];
};


export type QueryGetComplaintsFromFarmerArgs = {
  farmerId: Scalars['String']['input'];
};


export type QueryGetCropProfileByIdArgs = {
  cropProfileId: Scalars['String']['input'];
};


export type QueryGetEquipmentByIdArgs = {
  equipmentId: Scalars['String']['input'];
};


export type QueryGetFarmLotByIdArgs = {
  farmLotId: Scalars['String']['input'];
};


export type QueryGetFarmLotByLandGroupArgs = {
  landGroupId: Scalars['String']['input'];
};


export type QueryGetFarmOutputByFarmLotArgs = {
  farmLotId: Scalars['String']['input'];
};


export type QueryGetFarmOutputByIdArgs = {
  farmOutputId: Scalars['String']['input'];
};


export type QueryGetFarmWorkerByFarmerArgs = {
  farmerId: Scalars['String']['input'];
};


export type QueryGetFarmWorkerByIdArgs = {
  farmWorkerId: Scalars['String']['input'];
};


export type QueryGetFarmerProfileByIdArgs = {
  farmerId: Scalars['String']['input'];
};


export type QueryGetGeoAreaByIdArgs = {
  geoAreaId: Scalars['String']['input'];
};


export type QueryGetGeoCorpByAreaArgs = {
  geoAreaId: Scalars['String']['input'];
};


export type QueryGetGeoCorpByIdArgs = {
  geoCorpId: Scalars['String']['input'];
};


export type QueryGetInputByIdArgs = {
  inputId: Scalars['String']['input'];
};


export type QueryGetInputCategoryByIdArgs = {
  categoryId: Scalars['String']['input'];
};


export type QueryGetLandGroupByIdArgs = {
  landGroupId: Scalars['String']['input'];
};


export type QueryGetRoleByIdArgs = {
  roleId: Scalars['String']['input'];
};


export type QueryGetUnitByIdArgs = {
  unitId: Scalars['String']['input'];
};


export type QueryGetWarehouseByIdArgs = {
  warehouseId: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  archived?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  roleName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Token = {
  __typename?: 'Token';
  access_token: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
};

export type Unit = {
  __typename?: 'Unit';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  unitName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type UpdateActivity = {
  activityEquipment?: InputMaybe<Array<CreateActivityEquipment>>;
  activityInput?: InputMaybe<Array<CreateActivityInput>>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cropProfileId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCalendarActivity = {
  calendarActivityId: Scalars['String']['input'];
  endTime?: InputMaybe<Scalars['Date']['input']>;
  expectedOutput?: InputMaybe<Scalars['Float']['input']>;
  startTime?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateCalendarActivityTemplateInput = {
  activityId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['Date']['input']>;
  startTime?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateComplaint = {
  complaint?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCooperative = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  geographicAreaId?: InputMaybe<Scalars['String']['input']>;
  landGroupId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCropProfile = {
  cropName?: InputMaybe<Scalars['String']['input']>;
  lifeCycle?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEquipment = {
  costPerDay?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFarmLot = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  coorperativeId?: InputMaybe<Scalars['String']['input']>;
  cropProfileId?: InputMaybe<Scalars['String']['input']>;
  geographicAreaId?: InputMaybe<Scalars['String']['input']>;
  landGroupId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFarmOutput = {
  cropProfileId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  outputUnitId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  warehouseId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFarmWorker = {
  farmerId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFarmerInvite = {
  coorperativeId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  farmLotId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGeographicArea = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInput = {
  cost?: InputMaybe<Scalars['Float']['input']>;
  inputCategoryId?: InputMaybe<Scalars['String']['input']>;
  inputUnitId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLandGroup = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  geographicAreaId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRole = {
  description?: InputMaybe<Scalars['String']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWarehouse = {
  costPerDay?: InputMaybe<Scalars['Float']['input']>;
  geographicAreaId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Warehouse = {
  __typename?: 'Warehouse';
  archived?: Maybe<Scalars['Boolean']['output']>;
  costPerDay?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  farmOutputs?: Maybe<Array<Maybe<FarmOutput>>>;
  geographicArea?: Maybe<GeographicArea>;
  geographicAreaId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AdminLoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  twoFACode?: InputMaybe<Scalars['String']['input']>;
}>;


export type AdminLoginMutation = { __typename?: 'Mutation', adminLogin: { __typename?: 'Token', access_token: string, refresh_token: string } };

export type AdminSignUpAfterInviteMutationVariables = Exact<{
  adminInviteId: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AdminSignUpAfterInviteMutation = { __typename?: 'Mutation', adminSignUpAfterInvite: { __typename?: 'Token', access_token: string, refresh_token: string } };

export type GenerateQrCodeDataUrlMutationVariables = Exact<{ [key: string]: never; }>;


export type GenerateQrCodeDataUrlMutation = { __typename?: 'Mutation', generateQrCodeDataURL: string };

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = { __typename?: 'Query', getRoles: Array<{ __typename?: 'Role', id?: string | null, roleName?: string | null, archived?: boolean | null, description?: string | null } | null> };


export const AdminLoginDocument = gql`
    mutation adminLogin($email: String!, $password: String!, $twoFACode: String) {
  adminLogin(input: {email: $email, password: $password, twoFACode: $twoFACode}) {
    access_token
    refresh_token
  }
}
    `;
export type AdminLoginMutationFn = Apollo.MutationFunction<AdminLoginMutation, AdminLoginMutationVariables>;

/**
 * __useAdminLoginMutation__
 *
 * To run a mutation, you first call `useAdminLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminLoginMutation, { data, loading, error }] = useAdminLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      twoFACode: // value for 'twoFACode'
 *   },
 * });
 */
export function useAdminLoginMutation(baseOptions?: Apollo.MutationHookOptions<AdminLoginMutation, AdminLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminLoginMutation, AdminLoginMutationVariables>(AdminLoginDocument, options);
      }
export type AdminLoginMutationHookResult = ReturnType<typeof useAdminLoginMutation>;
export type AdminLoginMutationResult = Apollo.MutationResult<AdminLoginMutation>;
export type AdminLoginMutationOptions = Apollo.BaseMutationOptions<AdminLoginMutation, AdminLoginMutationVariables>;
export const AdminSignUpAfterInviteDocument = gql`
    mutation AdminSignUpAfterInvite($adminInviteId: String!, $password: String!) {
  adminSignUpAfterInvite(adminInviteId: $adminInviteId, password: $password) {
    access_token
    refresh_token
  }
}
    `;
export type AdminSignUpAfterInviteMutationFn = Apollo.MutationFunction<AdminSignUpAfterInviteMutation, AdminSignUpAfterInviteMutationVariables>;

/**
 * __useAdminSignUpAfterInviteMutation__
 *
 * To run a mutation, you first call `useAdminSignUpAfterInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminSignUpAfterInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminSignUpAfterInviteMutation, { data, loading, error }] = useAdminSignUpAfterInviteMutation({
 *   variables: {
 *      adminInviteId: // value for 'adminInviteId'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAdminSignUpAfterInviteMutation(baseOptions?: Apollo.MutationHookOptions<AdminSignUpAfterInviteMutation, AdminSignUpAfterInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminSignUpAfterInviteMutation, AdminSignUpAfterInviteMutationVariables>(AdminSignUpAfterInviteDocument, options);
      }
export type AdminSignUpAfterInviteMutationHookResult = ReturnType<typeof useAdminSignUpAfterInviteMutation>;
export type AdminSignUpAfterInviteMutationResult = Apollo.MutationResult<AdminSignUpAfterInviteMutation>;
export type AdminSignUpAfterInviteMutationOptions = Apollo.BaseMutationOptions<AdminSignUpAfterInviteMutation, AdminSignUpAfterInviteMutationVariables>;
export const GenerateQrCodeDataUrlDocument = gql`
    mutation GenerateQRCodeDataUrl {
  generateQrCodeDataURL
}
    `;
export type GenerateQrCodeDataUrlMutationFn = Apollo.MutationFunction<GenerateQrCodeDataUrlMutation, GenerateQrCodeDataUrlMutationVariables>;

/**
 * __useGenerateQrCodeDataUrlMutation__
 *
 * To run a mutation, you first call `useGenerateQrCodeDataUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateQrCodeDataUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateQrCodeDataUrlMutation, { data, loading, error }] = useGenerateQrCodeDataUrlMutation({
 *   variables: {
 *   },
 * });
 */
export function useGenerateQrCodeDataUrlMutation(baseOptions?: Apollo.MutationHookOptions<GenerateQrCodeDataUrlMutation, GenerateQrCodeDataUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateQrCodeDataUrlMutation, GenerateQrCodeDataUrlMutationVariables>(GenerateQrCodeDataUrlDocument, options);
      }
export type GenerateQrCodeDataUrlMutationHookResult = ReturnType<typeof useGenerateQrCodeDataUrlMutation>;
export type GenerateQrCodeDataUrlMutationResult = Apollo.MutationResult<GenerateQrCodeDataUrlMutation>;
export type GenerateQrCodeDataUrlMutationOptions = Apollo.BaseMutationOptions<GenerateQrCodeDataUrlMutation, GenerateQrCodeDataUrlMutationVariables>;
export const GetRolesDocument = gql`
    query GetRoles {
  getRoles {
    id
    roleName
    archived
    description
  }
}
    `;

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRolesQuery(baseOptions?: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
      }
export function useGetRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
        }
export function useGetRolesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
        }
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
export type GetRolesSuspenseQueryHookResult = ReturnType<typeof useGetRolesSuspenseQuery>;
export type GetRolesQueryResult = Apollo.QueryResult<GetRolesQuery, GetRolesQueryVariables>;