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
  adminComment?: Maybe<Scalars['String']['output']>;
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
  cooperative?: Maybe<Cooperative>;
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
  deleteAdminInvite?: Maybe<Scalars['Boolean']['output']>;
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
  forgotPassword?: Maybe<Scalars['String']['output']>;
  generateQrCodeDataURL: Scalars['String']['output'];
  generateTwoFactorAuthSecret: GenerateTwoFaResponse;
  resetForgotPassword?: Maybe<Scalars['Boolean']['output']>;
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


export type MutationDeleteAdminInviteArgs = {
  inviteId: Scalars['String']['input'];
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


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetForgotPasswordArgs = {
  forgotPasswordId: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationResolveComplaintArgs = {
  input: ResolveComplaint;
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
  getAdminInviteById?: Maybe<AdminInvite>;
  getAdminInvites?: Maybe<Array<Maybe<AdminInvite>>>;
  getAdminProfile?: Maybe<Admin>;
  getAdmins?: Maybe<Array<Maybe<Admin>>>;
  getCalendarActivityTemplateById?: Maybe<CalendarActivityTemplate>;
  getCalendarActivityTemplates?: Maybe<Array<Maybe<CalendarActivityTemplate>>>;
  getCalendarByCooperative?: Maybe<Array<Maybe<CalendarByFarmerFarmlotResponse>>>;
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
  getLatestActivitiesByCooperative?: Maybe<Array<Maybe<CalendarByFarmerFarmlotResponse>>>;
  getRoleById?: Maybe<Role>;
  getRoles: Array<Maybe<Role>>;
  getRolesForAdmin?: Maybe<Array<Maybe<Role>>>;
  getUnitById?: Maybe<Unit>;
  getUnits?: Maybe<Array<Maybe<Unit>>>;
  getUpcomingActivities?: Maybe<Array<Maybe<CalendarByFarmerFarmlotResponse>>>;
  getUpcomingActivitiesByCooperative?: Maybe<Array<Maybe<CalendarByFarmerFarmlotResponse>>>;
  getWarehouseById?: Maybe<Warehouse>;
  getWarehouses?: Maybe<Array<Maybe<Warehouse>>>;
};


export type QueryGetActivityByCropProfileArgs = {
  cropProfileId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetActivityByIdArgs = {
  activityId: Scalars['String']['input'];
};


export type QueryGetAdminInviteByIdArgs = {
  inviteId: Scalars['String']['input'];
};


export type QueryGetAdminProfileArgs = {
  adminProfileId: Scalars['String']['input'];
};


export type QueryGetCalendarActivityTemplateByIdArgs = {
  templateId: Scalars['String']['input'];
};


export type QueryGetCalendarByCooperativeArgs = {
  cooperativeId: Scalars['String']['input'];
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


export type QueryGetLatestActivitiesByCooperativeArgs = {
  cooperativeId: Scalars['String']['input'];
};


export type QueryGetRoleByIdArgs = {
  roleId: Scalars['String']['input'];
};


export type QueryGetUnitByIdArgs = {
  unitId: Scalars['String']['input'];
};


export type QueryGetUpcomingActivitiesByCooperativeArgs = {
  cooperativeId: Scalars['String']['input'];
};


export type QueryGetWarehouseByIdArgs = {
  warehouseId: Scalars['String']['input'];
};

export type ResolveComplaint = {
  comment?: InputMaybe<Scalars['String']['input']>;
  complaintId: Scalars['String']['input'];
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

export type AddActivityToCalendarMutationVariables = Exact<{
  activityId: Scalars['String']['input'];
  farmLotId: Scalars['String']['input'];
  startTime: Scalars['Date']['input'];
  endTime: Scalars['Date']['input'];
}>;


export type AddActivityToCalendarMutation = { __typename?: 'Mutation', addActivityToFarmCalendar?: boolean | null };

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

export type CreateActivityMutationVariables = Exact<{
  name: Scalars['String']['input'];
  cost: Scalars['Float']['input'];
  cropProfileId: Scalars['String']['input'];
  activityEquipment?: InputMaybe<Array<CreateActivityEquipment> | CreateActivityEquipment>;
  activityInput?: InputMaybe<Array<CreateActivityInput> | CreateActivityInput>;
}>;


export type CreateActivityMutation = { __typename?: 'Mutation', createActivity?: { __typename?: 'Activity', id?: string | null, name?: string | null, cost?: number | null, totalCost?: number | null } | null };

export type CreateCropProfileMutationVariables = Exact<{
  cropName: Scalars['String']['input'];
  lifeCycle: Scalars['String']['input'];
}>;


export type CreateCropProfileMutation = { __typename?: 'Mutation', createCropProfile?: { __typename?: 'CropProfile', id?: string | null, cropName?: string | null, lifeCycle?: string | null } | null };

export type CreateInputMutationVariables = Exact<{
  name: Scalars['String']['input'];
  cost: Scalars['Float']['input'];
  inputCategoryId: Scalars['String']['input'];
  inputUnitId: Scalars['String']['input'];
}>;


export type CreateInputMutation = { __typename?: 'Mutation', createInput?: { __typename?: 'Input', id?: string | null, name?: string | null, cost?: number | null } | null };

export type CreateFarmLotMutationVariables = Exact<{
  name: Scalars['String']['input'];
  landGroupId: Scalars['String']['input'];
  coorperativeId: Scalars['String']['input'];
  geographicAreaId: Scalars['String']['input'];
  cropProfileId: Scalars['String']['input'];
}>;


export type CreateFarmLotMutation = { __typename?: 'Mutation', createFarmLot?: { __typename?: 'FarmLot', id?: string | null, name?: string | null, landGroupId?: string | null, coorperativeId?: string | null, createdAt?: any | null } | null };

export type CreateFarmerProfileMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  coorperativeId: Scalars['String']['input'];
  farmLotIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type CreateFarmerProfileMutation = { __typename?: 'Mutation', createFarmerProfile?: { __typename?: 'CreateFarmerResponse', passcode?: string | null, farmerProfile?: { __typename?: 'Farmer', id?: string | null, email?: string | null } | null } | null };

export type CreateGeoAreaMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateGeoAreaMutation = { __typename?: 'Mutation', createGeoArea?: { __typename?: 'GeographicArea', id?: string | null, name?: string | null, createdAt?: any | null } | null };

export type CreateGeoCorpMutationVariables = Exact<{
  name: Scalars['String']['input'];
  geographicAreaId: Scalars['String']['input'];
  landGroupId: Scalars['String']['input'];
}>;


export type CreateGeoCorpMutation = { __typename?: 'Mutation', createGeoCorp?: { __typename?: 'Cooperative', id?: string | null, name?: string | null, geographicAreaId?: string | null, createdAt?: any | null } | null };

export type CreateLandGroupMutationVariables = Exact<{
  name: Scalars['String']['input'];
  geographicAreaId: Scalars['String']['input'];
}>;


export type CreateLandGroupMutation = { __typename?: 'Mutation', createLandGroup?: { __typename?: 'LandGroup', id?: string | null, name?: string | null, createdAt?: any | null } | null };

export type DeleteInputMutationVariables = Exact<{
  inputId: Scalars['String']['input'];
}>;


export type DeleteInputMutation = { __typename?: 'Mutation', deleteInput?: boolean | null };

export type DeleteFarmLotMutationVariables = Exact<{
  farmLotId: Scalars['String']['input'];
}>;


export type DeleteFarmLotMutation = { __typename?: 'Mutation', deleteFarmLot?: boolean | null };

export type DeleteGeoAreaMutationVariables = Exact<{
  geoAreaId: Scalars['String']['input'];
}>;


export type DeleteGeoAreaMutation = { __typename?: 'Mutation', deleteGeoArea?: boolean | null };

export type DeleteGeoCorpMutationVariables = Exact<{
  geoCorpId: Scalars['String']['input'];
}>;


export type DeleteGeoCorpMutation = { __typename?: 'Mutation', deleteGeoCorp?: boolean | null };

export type DeleteLandGroupMutationVariables = Exact<{
  landGroupId: Scalars['String']['input'];
}>;


export type DeleteLandGroupMutation = { __typename?: 'Mutation', deleteLandGroup?: boolean | null };

export type GenerateQrCodeDataUrlMutationVariables = Exact<{ [key: string]: never; }>;


export type GenerateQrCodeDataUrlMutation = { __typename?: 'Mutation', generateQrCodeDataURL: string };

export type ResolveComplaintMutationVariables = Exact<{
  complaintId: Scalars['String']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
}>;


export type ResolveComplaintMutation = { __typename?: 'Mutation', resolveComplaint?: boolean | null };

export type UpdateFarmLotMutationVariables = Exact<{
  farmLotId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  landGroupId?: InputMaybe<Scalars['String']['input']>;
  coorperativeId?: InputMaybe<Scalars['String']['input']>;
  geographicAreaId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateFarmLotMutation = { __typename?: 'Mutation', updateFarmLot?: { __typename?: 'FarmLot', id?: string | null, name?: string | null, landGroupId?: string | null, geographicAreaId?: string | null, coorperativeId?: string | null, archived?: boolean | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type UpdateGeoAreaMutationVariables = Exact<{
  geoAreaId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateGeoAreaMutation = { __typename?: 'Mutation', updateGeoArea?: { __typename?: 'GeographicArea', id?: string | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type UpdateGeoCorpMutationVariables = Exact<{
  geoCorpId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  geographicAreaId?: InputMaybe<Scalars['String']['input']>;
  landGroupId?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateGeoCorpMutation = { __typename?: 'Mutation', updateGeoCorp?: { __typename?: 'Cooperative', id?: string | null, name?: string | null, archived?: boolean | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type UpdateLandGroupMutationVariables = Exact<{
  landGroupId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  geographicAreaId?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateLandGroupMutation = { __typename?: 'Mutation', updateLandGroup?: { __typename?: 'LandGroup', id?: string | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type CreateEquipmentMutationVariables = Exact<{
  name: Scalars['String']['input'];
  costPerDay: Scalars['Float']['input'];
}>;


export type CreateEquipmentMutation = { __typename?: 'Mutation', createEquipment?: { __typename?: 'Equipment', id?: string | null, name?: string | null, costPerDay?: number | null } | null };

export type GetActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActivitiesQuery = { __typename?: 'Query', getActivities?: Array<{ __typename?: 'Activity', id?: string | null, name?: string | null, updatedAt?: any | null, createdAt?: any | null, adminId?: string | null, cropProfileId?: string | null, totalCost?: number | null, cropProfile?: { __typename?: 'CropProfile', cropName?: string | null } | null, admin?: { __typename?: 'Admin', fullname?: string | null, email?: string | null } | null } | null> | null };

export type GetCalendarByCooperativeQueryVariables = Exact<{
  cooperativeId: Scalars['String']['input'];
}>;


export type GetCalendarByCooperativeQuery = { __typename?: 'Query', getCalendarByCooperative?: Array<{ __typename?: 'CalendarByFarmerFarmlotResponse', date?: any | null, activitiesForDay?: Array<{ __typename?: 'FarmLotActivitiesForDay', farmLotname?: string | null, calendarActivity?: { __typename?: 'CalendarActivity', startTime?: any | null, endTime?: any | null, activity?: { __typename?: 'Activity', name?: string | null } | null } | null } | null> | null } | null> | null };

export type GetComplaintsFromFarmerQueryVariables = Exact<{
  farmerId: Scalars['String']['input'];
}>;


export type GetComplaintsFromFarmerQuery = { __typename?: 'Query', getComplaintsFromFarmer?: Array<{ __typename?: 'Complaint', id?: string | null, complaint?: string | null, description?: string | null, resolved?: boolean | null, farmer?: { __typename?: 'Farmer', id?: string | null, name?: string | null, coorperative?: { __typename?: 'Cooperative', name?: string | null } | null, farmLots?: Array<{ __typename?: 'FarmLot', name?: string | null } | null> | null } | null } | null> | null };

export type GetCropProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCropProfilesQuery = { __typename?: 'Query', getCropProfiles?: Array<{ __typename?: 'CropProfile', id?: string | null, cropName?: string | null, lifeCycle?: string | null, createdAt?: any | null } | null> | null };

export type GetEquipmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEquipmentsQuery = { __typename?: 'Query', getEquipments?: Array<{ __typename?: 'Equipment', id?: string | null, name?: string | null, costPerDay?: number | null, createdAt?: any | null } | null> | null };

export type GetInputsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInputsQuery = { __typename?: 'Query', getInputs?: Array<{ __typename?: 'Input', id?: string | null, name?: string | null, cost?: number | null } | null> | null };

export type GetFarmLotsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFarmLotsQuery = { __typename?: 'Query', getFarmLots: Array<{ __typename?: 'FarmLot', id?: string | null, name?: string | null, archived?: boolean | null, landGroup?: { __typename?: 'LandGroup', id?: string | null, name?: string | null } | null, coorperative?: { __typename?: 'Cooperative', id?: string | null, name?: string | null } | null, geographicArea?: { __typename?: 'GeographicArea', id?: string | null, name?: string | null } | null } | null> };

export type GetFarmLotByLandGroupQueryVariables = Exact<{
  landGroupId: Scalars['String']['input'];
}>;


export type GetFarmLotByLandGroupQuery = { __typename?: 'Query', getFarmLotByLandGroup: Array<{ __typename?: 'FarmLot', id?: string | null, name?: string | null, archived?: boolean | null } | null> };

export type GetFarmerProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFarmerProfilesQuery = { __typename?: 'Query', getFarmerProfiles: Array<{ __typename?: 'Farmer', name?: string | null, id?: string | null, farmLots?: Array<{ __typename?: 'FarmLot', name?: string | null } | null> | null, coorperative?: { __typename?: 'Cooperative', name?: string | null } | null } | null> };

export type GetGeoAreasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeoAreasQuery = { __typename?: 'Query', getGeoAreas: Array<{ __typename?: 'GeographicArea', id?: string | null, name?: string | null, createdAt?: any | null } | null> };

export type GetGeoCorpByIdQueryVariables = Exact<{
  geoCorpId: Scalars['String']['input'];
}>;


export type GetGeoCorpByIdQuery = { __typename?: 'Query', getGeoCorpById?: { __typename?: 'Cooperative', id?: string | null, name?: string | null, archived?: boolean | null, createdAt?: any | null, landGroup?: { __typename?: 'LandGroup', name?: string | null, id?: string | null } | null, geographicArea?: { __typename?: 'GeographicArea', name?: string | null, id?: string | null } | null, farmLots?: Array<{ __typename?: 'FarmLot', name?: string | null, id?: string | null } | null> | null } | null };

export type GetGeoCorpsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeoCorpsQuery = { __typename?: 'Query', getGeoCorps: Array<{ __typename?: 'Cooperative', id?: string | null, name?: string | null, createdAt?: any | null, farmLots?: Array<{ __typename?: 'FarmLot', name?: string | null } | null> | null, geographicArea?: { __typename?: 'GeographicArea', name?: string | null, id?: string | null } | null, landGroup?: { __typename?: 'LandGroup', name?: string | null, id?: string | null } | null } | null> };

export type GetInputCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInputCategoriesQuery = { __typename?: 'Query', getInputCategories?: Array<{ __typename?: 'InputCategory', id?: string | null, name?: string | null } | null> | null };

export type GetLandGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLandGroupsQuery = { __typename?: 'Query', getLandGroups: Array<{ __typename?: 'LandGroup', id?: string | null, name?: string | null, createdAt?: any | null, geographicArea?: { __typename?: 'GeographicArea', name?: string | null, id?: string | null } | null, cooperative?: { __typename?: 'Cooperative', name?: string | null } | null } | null> };

export type GetUnitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUnitsQuery = { __typename?: 'Query', getUnits?: Array<{ __typename?: 'Unit', id?: string | null, unitName?: string | null } | null> | null };

export type GetUpcomingActivitiesByCooperativeQueryVariables = Exact<{
  cooperativeId: Scalars['String']['input'];
}>;


export type GetUpcomingActivitiesByCooperativeQuery = { __typename?: 'Query', getUpcomingActivitiesByCooperative?: Array<{ __typename?: 'CalendarByFarmerFarmlotResponse', date?: any | null, activitiesForDay?: Array<{ __typename?: 'FarmLotActivitiesForDay', farmLotname?: string | null, calendarActivity?: { __typename?: 'CalendarActivity', startTime?: any | null, endTime?: any | null, activity?: { __typename?: 'Activity', name?: string | null } | null } | null } | null> | null } | null> | null };


export const AddActivityToCalendarDocument = gql`
    mutation AddActivityToCalendar($activityId: String!, $farmLotId: String!, $startTime: Date!, $endTime: Date!) {
  addActivityToFarmCalendar(
    input: {activityId: $activityId, farmLotId: $farmLotId, startTime: $startTime, endTime: $endTime}
  )
}
    `;
export type AddActivityToCalendarMutationFn = Apollo.MutationFunction<AddActivityToCalendarMutation, AddActivityToCalendarMutationVariables>;

/**
 * __useAddActivityToCalendarMutation__
 *
 * To run a mutation, you first call `useAddActivityToCalendarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddActivityToCalendarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addActivityToCalendarMutation, { data, loading, error }] = useAddActivityToCalendarMutation({
 *   variables: {
 *      activityId: // value for 'activityId'
 *      farmLotId: // value for 'farmLotId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *   },
 * });
 */
export function useAddActivityToCalendarMutation(baseOptions?: Apollo.MutationHookOptions<AddActivityToCalendarMutation, AddActivityToCalendarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddActivityToCalendarMutation, AddActivityToCalendarMutationVariables>(AddActivityToCalendarDocument, options);
      }
export type AddActivityToCalendarMutationHookResult = ReturnType<typeof useAddActivityToCalendarMutation>;
export type AddActivityToCalendarMutationResult = Apollo.MutationResult<AddActivityToCalendarMutation>;
export type AddActivityToCalendarMutationOptions = Apollo.BaseMutationOptions<AddActivityToCalendarMutation, AddActivityToCalendarMutationVariables>;
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
export const CreateActivityDocument = gql`
    mutation CreateActivity($name: String!, $cost: Float!, $cropProfileId: String!, $activityEquipment: [CreateActivityEquipment!], $activityInput: [CreateActivityInput!]) {
  createActivity(
    input: {name: $name, cost: $cost, cropProfileId: $cropProfileId, activityEquipment: $activityEquipment, activityInput: $activityInput}
  ) {
    id
    name
    cost
    totalCost
  }
}
    `;
export type CreateActivityMutationFn = Apollo.MutationFunction<CreateActivityMutation, CreateActivityMutationVariables>;

/**
 * __useCreateActivityMutation__
 *
 * To run a mutation, you first call `useCreateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActivityMutation, { data, loading, error }] = useCreateActivityMutation({
 *   variables: {
 *      name: // value for 'name'
 *      cost: // value for 'cost'
 *      cropProfileId: // value for 'cropProfileId'
 *      activityEquipment: // value for 'activityEquipment'
 *      activityInput: // value for 'activityInput'
 *   },
 * });
 */
export function useCreateActivityMutation(baseOptions?: Apollo.MutationHookOptions<CreateActivityMutation, CreateActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateActivityMutation, CreateActivityMutationVariables>(CreateActivityDocument, options);
      }
export type CreateActivityMutationHookResult = ReturnType<typeof useCreateActivityMutation>;
export type CreateActivityMutationResult = Apollo.MutationResult<CreateActivityMutation>;
export type CreateActivityMutationOptions = Apollo.BaseMutationOptions<CreateActivityMutation, CreateActivityMutationVariables>;
export const CreateCropProfileDocument = gql`
    mutation CreateCropProfile($cropName: String!, $lifeCycle: String!) {
  createCropProfile(input: {cropName: $cropName, lifeCycle: $lifeCycle}) {
    id
    cropName
    lifeCycle
  }
}
    `;
export type CreateCropProfileMutationFn = Apollo.MutationFunction<CreateCropProfileMutation, CreateCropProfileMutationVariables>;

/**
 * __useCreateCropProfileMutation__
 *
 * To run a mutation, you first call `useCreateCropProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCropProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCropProfileMutation, { data, loading, error }] = useCreateCropProfileMutation({
 *   variables: {
 *      cropName: // value for 'cropName'
 *      lifeCycle: // value for 'lifeCycle'
 *   },
 * });
 */
export function useCreateCropProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateCropProfileMutation, CreateCropProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCropProfileMutation, CreateCropProfileMutationVariables>(CreateCropProfileDocument, options);
      }
export type CreateCropProfileMutationHookResult = ReturnType<typeof useCreateCropProfileMutation>;
export type CreateCropProfileMutationResult = Apollo.MutationResult<CreateCropProfileMutation>;
export type CreateCropProfileMutationOptions = Apollo.BaseMutationOptions<CreateCropProfileMutation, CreateCropProfileMutationVariables>;
export const CreateInputDocument = gql`
    mutation CreateInput($name: String!, $cost: Float!, $inputCategoryId: String!, $inputUnitId: String!) {
  createInput(
    input: {name: $name, cost: $cost, inputCategoryId: $inputCategoryId, inputUnitId: $inputUnitId}
  ) {
    id
    name
    cost
  }
}
    `;
export type CreateInputMutationFn = Apollo.MutationFunction<CreateInputMutation, CreateInputMutationVariables>;

/**
 * __useCreateInputMutation__
 *
 * To run a mutation, you first call `useCreateInputMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInputMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInputMutation, { data, loading, error }] = useCreateInputMutation({
 *   variables: {
 *      name: // value for 'name'
 *      cost: // value for 'cost'
 *      inputCategoryId: // value for 'inputCategoryId'
 *      inputUnitId: // value for 'inputUnitId'
 *   },
 * });
 */
export function useCreateInputMutation(baseOptions?: Apollo.MutationHookOptions<CreateInputMutation, CreateInputMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInputMutation, CreateInputMutationVariables>(CreateInputDocument, options);
      }
export type CreateInputMutationHookResult = ReturnType<typeof useCreateInputMutation>;
export type CreateInputMutationResult = Apollo.MutationResult<CreateInputMutation>;
export type CreateInputMutationOptions = Apollo.BaseMutationOptions<CreateInputMutation, CreateInputMutationVariables>;
export const CreateFarmLotDocument = gql`
    mutation CreateFarmLot($name: String!, $landGroupId: String!, $coorperativeId: String!, $geographicAreaId: String!, $cropProfileId: String!) {
  createFarmLot(
    input: {name: $name, landGroupId: $landGroupId, coorperativeId: $coorperativeId, geographicAreaId: $geographicAreaId, cropProfileId: $cropProfileId}
  ) {
    id
    name
    landGroupId
    coorperativeId
    createdAt
  }
}
    `;
export type CreateFarmLotMutationFn = Apollo.MutationFunction<CreateFarmLotMutation, CreateFarmLotMutationVariables>;

/**
 * __useCreateFarmLotMutation__
 *
 * To run a mutation, you first call `useCreateFarmLotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFarmLotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFarmLotMutation, { data, loading, error }] = useCreateFarmLotMutation({
 *   variables: {
 *      name: // value for 'name'
 *      landGroupId: // value for 'landGroupId'
 *      coorperativeId: // value for 'coorperativeId'
 *      geographicAreaId: // value for 'geographicAreaId'
 *      cropProfileId: // value for 'cropProfileId'
 *   },
 * });
 */
export function useCreateFarmLotMutation(baseOptions?: Apollo.MutationHookOptions<CreateFarmLotMutation, CreateFarmLotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFarmLotMutation, CreateFarmLotMutationVariables>(CreateFarmLotDocument, options);
      }
export type CreateFarmLotMutationHookResult = ReturnType<typeof useCreateFarmLotMutation>;
export type CreateFarmLotMutationResult = Apollo.MutationResult<CreateFarmLotMutation>;
export type CreateFarmLotMutationOptions = Apollo.BaseMutationOptions<CreateFarmLotMutation, CreateFarmLotMutationVariables>;
export const CreateFarmerProfileDocument = gql`
    mutation CreateFarmerProfile($name: String!, $email: String!, $coorperativeId: String!, $farmLotIds: [String!]!) {
  createFarmerProfile(
    input: {name: $name, email: $email, coorperativeId: $coorperativeId, farmLotIds: $farmLotIds}
  ) {
    farmerProfile {
      id
      email
    }
    passcode
  }
}
    `;
export type CreateFarmerProfileMutationFn = Apollo.MutationFunction<CreateFarmerProfileMutation, CreateFarmerProfileMutationVariables>;

/**
 * __useCreateFarmerProfileMutation__
 *
 * To run a mutation, you first call `useCreateFarmerProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFarmerProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFarmerProfileMutation, { data, loading, error }] = useCreateFarmerProfileMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      coorperativeId: // value for 'coorperativeId'
 *      farmLotIds: // value for 'farmLotIds'
 *   },
 * });
 */
export function useCreateFarmerProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateFarmerProfileMutation, CreateFarmerProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFarmerProfileMutation, CreateFarmerProfileMutationVariables>(CreateFarmerProfileDocument, options);
      }
export type CreateFarmerProfileMutationHookResult = ReturnType<typeof useCreateFarmerProfileMutation>;
export type CreateFarmerProfileMutationResult = Apollo.MutationResult<CreateFarmerProfileMutation>;
export type CreateFarmerProfileMutationOptions = Apollo.BaseMutationOptions<CreateFarmerProfileMutation, CreateFarmerProfileMutationVariables>;
export const CreateGeoAreaDocument = gql`
    mutation CreateGeoArea($name: String!) {
  createGeoArea(name: $name) {
    id
    name
    createdAt
  }
}
    `;
export type CreateGeoAreaMutationFn = Apollo.MutationFunction<CreateGeoAreaMutation, CreateGeoAreaMutationVariables>;

/**
 * __useCreateGeoAreaMutation__
 *
 * To run a mutation, you first call `useCreateGeoAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGeoAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGeoAreaMutation, { data, loading, error }] = useCreateGeoAreaMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateGeoAreaMutation(baseOptions?: Apollo.MutationHookOptions<CreateGeoAreaMutation, CreateGeoAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGeoAreaMutation, CreateGeoAreaMutationVariables>(CreateGeoAreaDocument, options);
      }
export type CreateGeoAreaMutationHookResult = ReturnType<typeof useCreateGeoAreaMutation>;
export type CreateGeoAreaMutationResult = Apollo.MutationResult<CreateGeoAreaMutation>;
export type CreateGeoAreaMutationOptions = Apollo.BaseMutationOptions<CreateGeoAreaMutation, CreateGeoAreaMutationVariables>;
export const CreateGeoCorpDocument = gql`
    mutation CreateGeoCorp($name: String!, $geographicAreaId: String!, $landGroupId: String!) {
  createGeoCorp(
    input: {name: $name, geographicAreaId: $geographicAreaId, landGroupId: $landGroupId}
  ) {
    id
    name
    geographicAreaId
    createdAt
  }
}
    `;
export type CreateGeoCorpMutationFn = Apollo.MutationFunction<CreateGeoCorpMutation, CreateGeoCorpMutationVariables>;

/**
 * __useCreateGeoCorpMutation__
 *
 * To run a mutation, you first call `useCreateGeoCorpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGeoCorpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGeoCorpMutation, { data, loading, error }] = useCreateGeoCorpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      geographicAreaId: // value for 'geographicAreaId'
 *      landGroupId: // value for 'landGroupId'
 *   },
 * });
 */
export function useCreateGeoCorpMutation(baseOptions?: Apollo.MutationHookOptions<CreateGeoCorpMutation, CreateGeoCorpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGeoCorpMutation, CreateGeoCorpMutationVariables>(CreateGeoCorpDocument, options);
      }
export type CreateGeoCorpMutationHookResult = ReturnType<typeof useCreateGeoCorpMutation>;
export type CreateGeoCorpMutationResult = Apollo.MutationResult<CreateGeoCorpMutation>;
export type CreateGeoCorpMutationOptions = Apollo.BaseMutationOptions<CreateGeoCorpMutation, CreateGeoCorpMutationVariables>;
export const CreateLandGroupDocument = gql`
    mutation CreateLandGroup($name: String!, $geographicAreaId: String!) {
  createLandGroup(input: {name: $name, geographicAreaId: $geographicAreaId}) {
    id
    name
    createdAt
  }
}
    `;
export type CreateLandGroupMutationFn = Apollo.MutationFunction<CreateLandGroupMutation, CreateLandGroupMutationVariables>;

/**
 * __useCreateLandGroupMutation__
 *
 * To run a mutation, you first call `useCreateLandGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLandGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLandGroupMutation, { data, loading, error }] = useCreateLandGroupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      geographicAreaId: // value for 'geographicAreaId'
 *   },
 * });
 */
export function useCreateLandGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateLandGroupMutation, CreateLandGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLandGroupMutation, CreateLandGroupMutationVariables>(CreateLandGroupDocument, options);
      }
export type CreateLandGroupMutationHookResult = ReturnType<typeof useCreateLandGroupMutation>;
export type CreateLandGroupMutationResult = Apollo.MutationResult<CreateLandGroupMutation>;
export type CreateLandGroupMutationOptions = Apollo.BaseMutationOptions<CreateLandGroupMutation, CreateLandGroupMutationVariables>;
export const DeleteInputDocument = gql`
    mutation DeleteInput($inputId: String!) {
  deleteInput(inputId: $inputId)
}
    `;
export type DeleteInputMutationFn = Apollo.MutationFunction<DeleteInputMutation, DeleteInputMutationVariables>;

/**
 * __useDeleteInputMutation__
 *
 * To run a mutation, you first call `useDeleteInputMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInputMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInputMutation, { data, loading, error }] = useDeleteInputMutation({
 *   variables: {
 *      inputId: // value for 'inputId'
 *   },
 * });
 */
export function useDeleteInputMutation(baseOptions?: Apollo.MutationHookOptions<DeleteInputMutation, DeleteInputMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteInputMutation, DeleteInputMutationVariables>(DeleteInputDocument, options);
      }
export type DeleteInputMutationHookResult = ReturnType<typeof useDeleteInputMutation>;
export type DeleteInputMutationResult = Apollo.MutationResult<DeleteInputMutation>;
export type DeleteInputMutationOptions = Apollo.BaseMutationOptions<DeleteInputMutation, DeleteInputMutationVariables>;
export const DeleteFarmLotDocument = gql`
    mutation DeleteFarmLot($farmLotId: String!) {
  deleteFarmLot(farmLotId: $farmLotId)
}
    `;
export type DeleteFarmLotMutationFn = Apollo.MutationFunction<DeleteFarmLotMutation, DeleteFarmLotMutationVariables>;

/**
 * __useDeleteFarmLotMutation__
 *
 * To run a mutation, you first call `useDeleteFarmLotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFarmLotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFarmLotMutation, { data, loading, error }] = useDeleteFarmLotMutation({
 *   variables: {
 *      farmLotId: // value for 'farmLotId'
 *   },
 * });
 */
export function useDeleteFarmLotMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFarmLotMutation, DeleteFarmLotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFarmLotMutation, DeleteFarmLotMutationVariables>(DeleteFarmLotDocument, options);
      }
export type DeleteFarmLotMutationHookResult = ReturnType<typeof useDeleteFarmLotMutation>;
export type DeleteFarmLotMutationResult = Apollo.MutationResult<DeleteFarmLotMutation>;
export type DeleteFarmLotMutationOptions = Apollo.BaseMutationOptions<DeleteFarmLotMutation, DeleteFarmLotMutationVariables>;
export const DeleteGeoAreaDocument = gql`
    mutation DeleteGeoArea($geoAreaId: String!) {
  deleteGeoArea(geoAreaId: $geoAreaId)
}
    `;
export type DeleteGeoAreaMutationFn = Apollo.MutationFunction<DeleteGeoAreaMutation, DeleteGeoAreaMutationVariables>;

/**
 * __useDeleteGeoAreaMutation__
 *
 * To run a mutation, you first call `useDeleteGeoAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGeoAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGeoAreaMutation, { data, loading, error }] = useDeleteGeoAreaMutation({
 *   variables: {
 *      geoAreaId: // value for 'geoAreaId'
 *   },
 * });
 */
export function useDeleteGeoAreaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGeoAreaMutation, DeleteGeoAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGeoAreaMutation, DeleteGeoAreaMutationVariables>(DeleteGeoAreaDocument, options);
      }
export type DeleteGeoAreaMutationHookResult = ReturnType<typeof useDeleteGeoAreaMutation>;
export type DeleteGeoAreaMutationResult = Apollo.MutationResult<DeleteGeoAreaMutation>;
export type DeleteGeoAreaMutationOptions = Apollo.BaseMutationOptions<DeleteGeoAreaMutation, DeleteGeoAreaMutationVariables>;
export const DeleteGeoCorpDocument = gql`
    mutation DeleteGeoCorp($geoCorpId: String!) {
  deleteGeoCorp(geoCorpId: $geoCorpId)
}
    `;
export type DeleteGeoCorpMutationFn = Apollo.MutationFunction<DeleteGeoCorpMutation, DeleteGeoCorpMutationVariables>;

/**
 * __useDeleteGeoCorpMutation__
 *
 * To run a mutation, you first call `useDeleteGeoCorpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGeoCorpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGeoCorpMutation, { data, loading, error }] = useDeleteGeoCorpMutation({
 *   variables: {
 *      geoCorpId: // value for 'geoCorpId'
 *   },
 * });
 */
export function useDeleteGeoCorpMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGeoCorpMutation, DeleteGeoCorpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGeoCorpMutation, DeleteGeoCorpMutationVariables>(DeleteGeoCorpDocument, options);
      }
export type DeleteGeoCorpMutationHookResult = ReturnType<typeof useDeleteGeoCorpMutation>;
export type DeleteGeoCorpMutationResult = Apollo.MutationResult<DeleteGeoCorpMutation>;
export type DeleteGeoCorpMutationOptions = Apollo.BaseMutationOptions<DeleteGeoCorpMutation, DeleteGeoCorpMutationVariables>;
export const DeleteLandGroupDocument = gql`
    mutation DeleteLandGroup($landGroupId: String!) {
  deleteLandGroup(landGroupId: $landGroupId)
}
    `;
export type DeleteLandGroupMutationFn = Apollo.MutationFunction<DeleteLandGroupMutation, DeleteLandGroupMutationVariables>;

/**
 * __useDeleteLandGroupMutation__
 *
 * To run a mutation, you first call `useDeleteLandGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLandGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLandGroupMutation, { data, loading, error }] = useDeleteLandGroupMutation({
 *   variables: {
 *      landGroupId: // value for 'landGroupId'
 *   },
 * });
 */
export function useDeleteLandGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLandGroupMutation, DeleteLandGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLandGroupMutation, DeleteLandGroupMutationVariables>(DeleteLandGroupDocument, options);
      }
export type DeleteLandGroupMutationHookResult = ReturnType<typeof useDeleteLandGroupMutation>;
export type DeleteLandGroupMutationResult = Apollo.MutationResult<DeleteLandGroupMutation>;
export type DeleteLandGroupMutationOptions = Apollo.BaseMutationOptions<DeleteLandGroupMutation, DeleteLandGroupMutationVariables>;
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
export const ResolveComplaintDocument = gql`
    mutation ResolveComplaint($complaintId: String!, $comment: String) {
  resolveComplaint(input: {complaintId: $complaintId, comment: $comment})
}
    `;
export type ResolveComplaintMutationFn = Apollo.MutationFunction<ResolveComplaintMutation, ResolveComplaintMutationVariables>;

/**
 * __useResolveComplaintMutation__
 *
 * To run a mutation, you first call `useResolveComplaintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResolveComplaintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resolveComplaintMutation, { data, loading, error }] = useResolveComplaintMutation({
 *   variables: {
 *      complaintId: // value for 'complaintId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useResolveComplaintMutation(baseOptions?: Apollo.MutationHookOptions<ResolveComplaintMutation, ResolveComplaintMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResolveComplaintMutation, ResolveComplaintMutationVariables>(ResolveComplaintDocument, options);
      }
export type ResolveComplaintMutationHookResult = ReturnType<typeof useResolveComplaintMutation>;
export type ResolveComplaintMutationResult = Apollo.MutationResult<ResolveComplaintMutation>;
export type ResolveComplaintMutationOptions = Apollo.BaseMutationOptions<ResolveComplaintMutation, ResolveComplaintMutationVariables>;
export const UpdateFarmLotDocument = gql`
    mutation UpdateFarmLot($farmLotId: String!, $name: String, $landGroupId: String, $coorperativeId: String, $geographicAreaId: String) {
  updateFarmLot(
    farmLotId: $farmLotId
    input: {name: $name, landGroupId: $landGroupId, coorperativeId: $coorperativeId, geographicAreaId: $geographicAreaId}
  ) {
    id
    name
    landGroupId
    geographicAreaId
    coorperativeId
    archived
    createdAt
    updatedAt
  }
}
    `;
export type UpdateFarmLotMutationFn = Apollo.MutationFunction<UpdateFarmLotMutation, UpdateFarmLotMutationVariables>;

/**
 * __useUpdateFarmLotMutation__
 *
 * To run a mutation, you first call `useUpdateFarmLotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFarmLotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFarmLotMutation, { data, loading, error }] = useUpdateFarmLotMutation({
 *   variables: {
 *      farmLotId: // value for 'farmLotId'
 *      name: // value for 'name'
 *      landGroupId: // value for 'landGroupId'
 *      coorperativeId: // value for 'coorperativeId'
 *      geographicAreaId: // value for 'geographicAreaId'
 *   },
 * });
 */
export function useUpdateFarmLotMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFarmLotMutation, UpdateFarmLotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFarmLotMutation, UpdateFarmLotMutationVariables>(UpdateFarmLotDocument, options);
      }
export type UpdateFarmLotMutationHookResult = ReturnType<typeof useUpdateFarmLotMutation>;
export type UpdateFarmLotMutationResult = Apollo.MutationResult<UpdateFarmLotMutation>;
export type UpdateFarmLotMutationOptions = Apollo.BaseMutationOptions<UpdateFarmLotMutation, UpdateFarmLotMutationVariables>;
export const UpdateGeoAreaDocument = gql`
    mutation UpdateGeoArea($geoAreaId: String!, $name: String, $archived: Boolean) {
  updateGeoArea(geoAreaId: $geoAreaId, input: {name: $name, archived: $archived}) {
    id
    name
    createdAt
    updatedAt
  }
}
    `;
export type UpdateGeoAreaMutationFn = Apollo.MutationFunction<UpdateGeoAreaMutation, UpdateGeoAreaMutationVariables>;

/**
 * __useUpdateGeoAreaMutation__
 *
 * To run a mutation, you first call `useUpdateGeoAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGeoAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGeoAreaMutation, { data, loading, error }] = useUpdateGeoAreaMutation({
 *   variables: {
 *      geoAreaId: // value for 'geoAreaId'
 *      name: // value for 'name'
 *      archived: // value for 'archived'
 *   },
 * });
 */
export function useUpdateGeoAreaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGeoAreaMutation, UpdateGeoAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGeoAreaMutation, UpdateGeoAreaMutationVariables>(UpdateGeoAreaDocument, options);
      }
export type UpdateGeoAreaMutationHookResult = ReturnType<typeof useUpdateGeoAreaMutation>;
export type UpdateGeoAreaMutationResult = Apollo.MutationResult<UpdateGeoAreaMutation>;
export type UpdateGeoAreaMutationOptions = Apollo.BaseMutationOptions<UpdateGeoAreaMutation, UpdateGeoAreaMutationVariables>;
export const UpdateGeoCorpDocument = gql`
    mutation UpdateGeoCorp($geoCorpId: String!, $name: String, $geographicAreaId: String, $landGroupId: String, $archived: Boolean) {
  updateGeoCorp(
    geoCorpId: $geoCorpId
    input: {name: $name, geographicAreaId: $geographicAreaId, landGroupId: $landGroupId, archived: $archived}
  ) {
    id
    name
    archived
    createdAt
    updatedAt
  }
}
    `;
export type UpdateGeoCorpMutationFn = Apollo.MutationFunction<UpdateGeoCorpMutation, UpdateGeoCorpMutationVariables>;

/**
 * __useUpdateGeoCorpMutation__
 *
 * To run a mutation, you first call `useUpdateGeoCorpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGeoCorpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGeoCorpMutation, { data, loading, error }] = useUpdateGeoCorpMutation({
 *   variables: {
 *      geoCorpId: // value for 'geoCorpId'
 *      name: // value for 'name'
 *      geographicAreaId: // value for 'geographicAreaId'
 *      landGroupId: // value for 'landGroupId'
 *      archived: // value for 'archived'
 *   },
 * });
 */
export function useUpdateGeoCorpMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGeoCorpMutation, UpdateGeoCorpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGeoCorpMutation, UpdateGeoCorpMutationVariables>(UpdateGeoCorpDocument, options);
      }
export type UpdateGeoCorpMutationHookResult = ReturnType<typeof useUpdateGeoCorpMutation>;
export type UpdateGeoCorpMutationResult = Apollo.MutationResult<UpdateGeoCorpMutation>;
export type UpdateGeoCorpMutationOptions = Apollo.BaseMutationOptions<UpdateGeoCorpMutation, UpdateGeoCorpMutationVariables>;
export const UpdateLandGroupDocument = gql`
    mutation UpdateLandGroup($landGroupId: String!, $name: String, $geographicAreaId: String, $archived: Boolean) {
  updateLandGroup(
    landGroupId: $landGroupId
    input: {name: $name, geographicAreaId: $geographicAreaId, archived: $archived}
  ) {
    id
    name
    createdAt
    updatedAt
  }
}
    `;
export type UpdateLandGroupMutationFn = Apollo.MutationFunction<UpdateLandGroupMutation, UpdateLandGroupMutationVariables>;

/**
 * __useUpdateLandGroupMutation__
 *
 * To run a mutation, you first call `useUpdateLandGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLandGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLandGroupMutation, { data, loading, error }] = useUpdateLandGroupMutation({
 *   variables: {
 *      landGroupId: // value for 'landGroupId'
 *      name: // value for 'name'
 *      geographicAreaId: // value for 'geographicAreaId'
 *      archived: // value for 'archived'
 *   },
 * });
 */
export function useUpdateLandGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLandGroupMutation, UpdateLandGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLandGroupMutation, UpdateLandGroupMutationVariables>(UpdateLandGroupDocument, options);
      }
export type UpdateLandGroupMutationHookResult = ReturnType<typeof useUpdateLandGroupMutation>;
export type UpdateLandGroupMutationResult = Apollo.MutationResult<UpdateLandGroupMutation>;
export type UpdateLandGroupMutationOptions = Apollo.BaseMutationOptions<UpdateLandGroupMutation, UpdateLandGroupMutationVariables>;
export const CreateEquipmentDocument = gql`
    mutation CreateEquipment($name: String!, $costPerDay: Float!) {
  createEquipment(input: {name: $name, costPerDay: $costPerDay}) {
    id
    name
    costPerDay
  }
}
    `;
export type CreateEquipmentMutationFn = Apollo.MutationFunction<CreateEquipmentMutation, CreateEquipmentMutationVariables>;

/**
 * __useCreateEquipmentMutation__
 *
 * To run a mutation, you first call `useCreateEquipmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEquipmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEquipmentMutation, { data, loading, error }] = useCreateEquipmentMutation({
 *   variables: {
 *      name: // value for 'name'
 *      costPerDay: // value for 'costPerDay'
 *   },
 * });
 */
export function useCreateEquipmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateEquipmentMutation, CreateEquipmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEquipmentMutation, CreateEquipmentMutationVariables>(CreateEquipmentDocument, options);
      }
export type CreateEquipmentMutationHookResult = ReturnType<typeof useCreateEquipmentMutation>;
export type CreateEquipmentMutationResult = Apollo.MutationResult<CreateEquipmentMutation>;
export type CreateEquipmentMutationOptions = Apollo.BaseMutationOptions<CreateEquipmentMutation, CreateEquipmentMutationVariables>;
export const GetActivitiesDocument = gql`
    query GetActivities {
  getActivities {
    id
    name
    updatedAt
    createdAt
    adminId
    cropProfile {
      cropName
    }
    cropProfileId
    admin {
      fullname
      email
    }
    totalCost
  }
}
    `;

/**
 * __useGetActivitiesQuery__
 *
 * To run a query within a React component, call `useGetActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetActivitiesQuery, GetActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivitiesQuery, GetActivitiesQueryVariables>(GetActivitiesDocument, options);
      }
export function useGetActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivitiesQuery, GetActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivitiesQuery, GetActivitiesQueryVariables>(GetActivitiesDocument, options);
        }
export function useGetActivitiesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetActivitiesQuery, GetActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetActivitiesQuery, GetActivitiesQueryVariables>(GetActivitiesDocument, options);
        }
export type GetActivitiesQueryHookResult = ReturnType<typeof useGetActivitiesQuery>;
export type GetActivitiesLazyQueryHookResult = ReturnType<typeof useGetActivitiesLazyQuery>;
export type GetActivitiesSuspenseQueryHookResult = ReturnType<typeof useGetActivitiesSuspenseQuery>;
export type GetActivitiesQueryResult = Apollo.QueryResult<GetActivitiesQuery, GetActivitiesQueryVariables>;
export const GetCalendarByCooperativeDocument = gql`
    query GetCalendarByCooperative($cooperativeId: String!) {
  getCalendarByCooperative(cooperativeId: $cooperativeId) {
    date
    activitiesForDay {
      farmLotname
      calendarActivity {
        activity {
          name
        }
        startTime
        endTime
      }
    }
  }
}
    `;

/**
 * __useGetCalendarByCooperativeQuery__
 *
 * To run a query within a React component, call `useGetCalendarByCooperativeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCalendarByCooperativeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCalendarByCooperativeQuery({
 *   variables: {
 *      cooperativeId: // value for 'cooperativeId'
 *   },
 * });
 */
export function useGetCalendarByCooperativeQuery(baseOptions: Apollo.QueryHookOptions<GetCalendarByCooperativeQuery, GetCalendarByCooperativeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCalendarByCooperativeQuery, GetCalendarByCooperativeQueryVariables>(GetCalendarByCooperativeDocument, options);
      }
export function useGetCalendarByCooperativeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCalendarByCooperativeQuery, GetCalendarByCooperativeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCalendarByCooperativeQuery, GetCalendarByCooperativeQueryVariables>(GetCalendarByCooperativeDocument, options);
        }
export function useGetCalendarByCooperativeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCalendarByCooperativeQuery, GetCalendarByCooperativeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCalendarByCooperativeQuery, GetCalendarByCooperativeQueryVariables>(GetCalendarByCooperativeDocument, options);
        }
export type GetCalendarByCooperativeQueryHookResult = ReturnType<typeof useGetCalendarByCooperativeQuery>;
export type GetCalendarByCooperativeLazyQueryHookResult = ReturnType<typeof useGetCalendarByCooperativeLazyQuery>;
export type GetCalendarByCooperativeSuspenseQueryHookResult = ReturnType<typeof useGetCalendarByCooperativeSuspenseQuery>;
export type GetCalendarByCooperativeQueryResult = Apollo.QueryResult<GetCalendarByCooperativeQuery, GetCalendarByCooperativeQueryVariables>;
export const GetComplaintsFromFarmerDocument = gql`
    query GetComplaintsFromFarmer($farmerId: String!) {
  getComplaintsFromFarmer(farmerId: $farmerId) {
    id
    complaint
    description
    resolved
    farmer {
      id
      name
      coorperative {
        name
      }
      farmLots {
        name
      }
    }
  }
}
    `;

/**
 * __useGetComplaintsFromFarmerQuery__
 *
 * To run a query within a React component, call `useGetComplaintsFromFarmerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComplaintsFromFarmerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComplaintsFromFarmerQuery({
 *   variables: {
 *      farmerId: // value for 'farmerId'
 *   },
 * });
 */
export function useGetComplaintsFromFarmerQuery(baseOptions: Apollo.QueryHookOptions<GetComplaintsFromFarmerQuery, GetComplaintsFromFarmerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetComplaintsFromFarmerQuery, GetComplaintsFromFarmerQueryVariables>(GetComplaintsFromFarmerDocument, options);
      }
export function useGetComplaintsFromFarmerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComplaintsFromFarmerQuery, GetComplaintsFromFarmerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetComplaintsFromFarmerQuery, GetComplaintsFromFarmerQueryVariables>(GetComplaintsFromFarmerDocument, options);
        }
export function useGetComplaintsFromFarmerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetComplaintsFromFarmerQuery, GetComplaintsFromFarmerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetComplaintsFromFarmerQuery, GetComplaintsFromFarmerQueryVariables>(GetComplaintsFromFarmerDocument, options);
        }
export type GetComplaintsFromFarmerQueryHookResult = ReturnType<typeof useGetComplaintsFromFarmerQuery>;
export type GetComplaintsFromFarmerLazyQueryHookResult = ReturnType<typeof useGetComplaintsFromFarmerLazyQuery>;
export type GetComplaintsFromFarmerSuspenseQueryHookResult = ReturnType<typeof useGetComplaintsFromFarmerSuspenseQuery>;
export type GetComplaintsFromFarmerQueryResult = Apollo.QueryResult<GetComplaintsFromFarmerQuery, GetComplaintsFromFarmerQueryVariables>;
export const GetCropProfilesDocument = gql`
    query GetCropProfiles {
  getCropProfiles {
    id
    cropName
    lifeCycle
    createdAt
  }
}
    `;

/**
 * __useGetCropProfilesQuery__
 *
 * To run a query within a React component, call `useGetCropProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCropProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCropProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCropProfilesQuery(baseOptions?: Apollo.QueryHookOptions<GetCropProfilesQuery, GetCropProfilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCropProfilesQuery, GetCropProfilesQueryVariables>(GetCropProfilesDocument, options);
      }
export function useGetCropProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCropProfilesQuery, GetCropProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCropProfilesQuery, GetCropProfilesQueryVariables>(GetCropProfilesDocument, options);
        }
export function useGetCropProfilesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCropProfilesQuery, GetCropProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCropProfilesQuery, GetCropProfilesQueryVariables>(GetCropProfilesDocument, options);
        }
export type GetCropProfilesQueryHookResult = ReturnType<typeof useGetCropProfilesQuery>;
export type GetCropProfilesLazyQueryHookResult = ReturnType<typeof useGetCropProfilesLazyQuery>;
export type GetCropProfilesSuspenseQueryHookResult = ReturnType<typeof useGetCropProfilesSuspenseQuery>;
export type GetCropProfilesQueryResult = Apollo.QueryResult<GetCropProfilesQuery, GetCropProfilesQueryVariables>;
export const GetEquipmentsDocument = gql`
    query GetEquipments {
  getEquipments {
    id
    name
    costPerDay
    createdAt
  }
}
    `;

/**
 * __useGetEquipmentsQuery__
 *
 * To run a query within a React component, call `useGetEquipmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEquipmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEquipmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEquipmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetEquipmentsQuery, GetEquipmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEquipmentsQuery, GetEquipmentsQueryVariables>(GetEquipmentsDocument, options);
      }
export function useGetEquipmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEquipmentsQuery, GetEquipmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEquipmentsQuery, GetEquipmentsQueryVariables>(GetEquipmentsDocument, options);
        }
export function useGetEquipmentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetEquipmentsQuery, GetEquipmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEquipmentsQuery, GetEquipmentsQueryVariables>(GetEquipmentsDocument, options);
        }
export type GetEquipmentsQueryHookResult = ReturnType<typeof useGetEquipmentsQuery>;
export type GetEquipmentsLazyQueryHookResult = ReturnType<typeof useGetEquipmentsLazyQuery>;
export type GetEquipmentsSuspenseQueryHookResult = ReturnType<typeof useGetEquipmentsSuspenseQuery>;
export type GetEquipmentsQueryResult = Apollo.QueryResult<GetEquipmentsQuery, GetEquipmentsQueryVariables>;
export const GetInputsDocument = gql`
    query GetInputs {
  getInputs {
    id
    name
    cost
  }
}
    `;

/**
 * __useGetInputsQuery__
 *
 * To run a query within a React component, call `useGetInputsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInputsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInputsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInputsQuery(baseOptions?: Apollo.QueryHookOptions<GetInputsQuery, GetInputsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInputsQuery, GetInputsQueryVariables>(GetInputsDocument, options);
      }
export function useGetInputsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInputsQuery, GetInputsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInputsQuery, GetInputsQueryVariables>(GetInputsDocument, options);
        }
export function useGetInputsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetInputsQuery, GetInputsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetInputsQuery, GetInputsQueryVariables>(GetInputsDocument, options);
        }
export type GetInputsQueryHookResult = ReturnType<typeof useGetInputsQuery>;
export type GetInputsLazyQueryHookResult = ReturnType<typeof useGetInputsLazyQuery>;
export type GetInputsSuspenseQueryHookResult = ReturnType<typeof useGetInputsSuspenseQuery>;
export type GetInputsQueryResult = Apollo.QueryResult<GetInputsQuery, GetInputsQueryVariables>;
export const GetFarmLotsDocument = gql`
    query GetFarmLots {
  getFarmLots {
    id
    name
    landGroup {
      id
      name
    }
    coorperative {
      id
      name
    }
    geographicArea {
      id
      name
    }
    archived
  }
}
    `;

/**
 * __useGetFarmLotsQuery__
 *
 * To run a query within a React component, call `useGetFarmLotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFarmLotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFarmLotsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFarmLotsQuery(baseOptions?: Apollo.QueryHookOptions<GetFarmLotsQuery, GetFarmLotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFarmLotsQuery, GetFarmLotsQueryVariables>(GetFarmLotsDocument, options);
      }
export function useGetFarmLotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFarmLotsQuery, GetFarmLotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFarmLotsQuery, GetFarmLotsQueryVariables>(GetFarmLotsDocument, options);
        }
export function useGetFarmLotsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFarmLotsQuery, GetFarmLotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFarmLotsQuery, GetFarmLotsQueryVariables>(GetFarmLotsDocument, options);
        }
export type GetFarmLotsQueryHookResult = ReturnType<typeof useGetFarmLotsQuery>;
export type GetFarmLotsLazyQueryHookResult = ReturnType<typeof useGetFarmLotsLazyQuery>;
export type GetFarmLotsSuspenseQueryHookResult = ReturnType<typeof useGetFarmLotsSuspenseQuery>;
export type GetFarmLotsQueryResult = Apollo.QueryResult<GetFarmLotsQuery, GetFarmLotsQueryVariables>;
export const GetFarmLotByLandGroupDocument = gql`
    query GetFarmLotByLandGroup($landGroupId: String!) {
  getFarmLotByLandGroup(landGroupId: $landGroupId) {
    id
    name
    archived
  }
}
    `;

/**
 * __useGetFarmLotByLandGroupQuery__
 *
 * To run a query within a React component, call `useGetFarmLotByLandGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFarmLotByLandGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFarmLotByLandGroupQuery({
 *   variables: {
 *      landGroupId: // value for 'landGroupId'
 *   },
 * });
 */
export function useGetFarmLotByLandGroupQuery(baseOptions: Apollo.QueryHookOptions<GetFarmLotByLandGroupQuery, GetFarmLotByLandGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFarmLotByLandGroupQuery, GetFarmLotByLandGroupQueryVariables>(GetFarmLotByLandGroupDocument, options);
      }
export function useGetFarmLotByLandGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFarmLotByLandGroupQuery, GetFarmLotByLandGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFarmLotByLandGroupQuery, GetFarmLotByLandGroupQueryVariables>(GetFarmLotByLandGroupDocument, options);
        }
export function useGetFarmLotByLandGroupSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFarmLotByLandGroupQuery, GetFarmLotByLandGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFarmLotByLandGroupQuery, GetFarmLotByLandGroupQueryVariables>(GetFarmLotByLandGroupDocument, options);
        }
export type GetFarmLotByLandGroupQueryHookResult = ReturnType<typeof useGetFarmLotByLandGroupQuery>;
export type GetFarmLotByLandGroupLazyQueryHookResult = ReturnType<typeof useGetFarmLotByLandGroupLazyQuery>;
export type GetFarmLotByLandGroupSuspenseQueryHookResult = ReturnType<typeof useGetFarmLotByLandGroupSuspenseQuery>;
export type GetFarmLotByLandGroupQueryResult = Apollo.QueryResult<GetFarmLotByLandGroupQuery, GetFarmLotByLandGroupQueryVariables>;
export const GetFarmerProfilesDocument = gql`
    query GetFarmerProfiles {
  getFarmerProfiles {
    name
    id
    farmLots {
      name
    }
    coorperative {
      name
    }
    farmLots {
      name
    }
  }
}
    `;

/**
 * __useGetFarmerProfilesQuery__
 *
 * To run a query within a React component, call `useGetFarmerProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFarmerProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFarmerProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFarmerProfilesQuery(baseOptions?: Apollo.QueryHookOptions<GetFarmerProfilesQuery, GetFarmerProfilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFarmerProfilesQuery, GetFarmerProfilesQueryVariables>(GetFarmerProfilesDocument, options);
      }
export function useGetFarmerProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFarmerProfilesQuery, GetFarmerProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFarmerProfilesQuery, GetFarmerProfilesQueryVariables>(GetFarmerProfilesDocument, options);
        }
export function useGetFarmerProfilesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFarmerProfilesQuery, GetFarmerProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFarmerProfilesQuery, GetFarmerProfilesQueryVariables>(GetFarmerProfilesDocument, options);
        }
export type GetFarmerProfilesQueryHookResult = ReturnType<typeof useGetFarmerProfilesQuery>;
export type GetFarmerProfilesLazyQueryHookResult = ReturnType<typeof useGetFarmerProfilesLazyQuery>;
export type GetFarmerProfilesSuspenseQueryHookResult = ReturnType<typeof useGetFarmerProfilesSuspenseQuery>;
export type GetFarmerProfilesQueryResult = Apollo.QueryResult<GetFarmerProfilesQuery, GetFarmerProfilesQueryVariables>;
export const GetGeoAreasDocument = gql`
    query GetGeoAreas {
  getGeoAreas {
    id
    name
    createdAt
  }
}
    `;

/**
 * __useGetGeoAreasQuery__
 *
 * To run a query within a React component, call `useGetGeoAreasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeoAreasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeoAreasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGeoAreasQuery(baseOptions?: Apollo.QueryHookOptions<GetGeoAreasQuery, GetGeoAreasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeoAreasQuery, GetGeoAreasQueryVariables>(GetGeoAreasDocument, options);
      }
export function useGetGeoAreasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeoAreasQuery, GetGeoAreasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeoAreasQuery, GetGeoAreasQueryVariables>(GetGeoAreasDocument, options);
        }
export function useGetGeoAreasSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGeoAreasQuery, GetGeoAreasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGeoAreasQuery, GetGeoAreasQueryVariables>(GetGeoAreasDocument, options);
        }
export type GetGeoAreasQueryHookResult = ReturnType<typeof useGetGeoAreasQuery>;
export type GetGeoAreasLazyQueryHookResult = ReturnType<typeof useGetGeoAreasLazyQuery>;
export type GetGeoAreasSuspenseQueryHookResult = ReturnType<typeof useGetGeoAreasSuspenseQuery>;
export type GetGeoAreasQueryResult = Apollo.QueryResult<GetGeoAreasQuery, GetGeoAreasQueryVariables>;
export const GetGeoCorpByIdDocument = gql`
    query GetGeoCorpById($geoCorpId: String!) {
  getGeoCorpById(geoCorpId: $geoCorpId) {
    id
    name
    archived
    createdAt
    landGroup {
      name
      id
    }
    geographicArea {
      name
      id
    }
    farmLots {
      name
      id
    }
  }
}
    `;

/**
 * __useGetGeoCorpByIdQuery__
 *
 * To run a query within a React component, call `useGetGeoCorpByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeoCorpByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeoCorpByIdQuery({
 *   variables: {
 *      geoCorpId: // value for 'geoCorpId'
 *   },
 * });
 */
export function useGetGeoCorpByIdQuery(baseOptions: Apollo.QueryHookOptions<GetGeoCorpByIdQuery, GetGeoCorpByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeoCorpByIdQuery, GetGeoCorpByIdQueryVariables>(GetGeoCorpByIdDocument, options);
      }
export function useGetGeoCorpByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeoCorpByIdQuery, GetGeoCorpByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeoCorpByIdQuery, GetGeoCorpByIdQueryVariables>(GetGeoCorpByIdDocument, options);
        }
export function useGetGeoCorpByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGeoCorpByIdQuery, GetGeoCorpByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGeoCorpByIdQuery, GetGeoCorpByIdQueryVariables>(GetGeoCorpByIdDocument, options);
        }
export type GetGeoCorpByIdQueryHookResult = ReturnType<typeof useGetGeoCorpByIdQuery>;
export type GetGeoCorpByIdLazyQueryHookResult = ReturnType<typeof useGetGeoCorpByIdLazyQuery>;
export type GetGeoCorpByIdSuspenseQueryHookResult = ReturnType<typeof useGetGeoCorpByIdSuspenseQuery>;
export type GetGeoCorpByIdQueryResult = Apollo.QueryResult<GetGeoCorpByIdQuery, GetGeoCorpByIdQueryVariables>;
export const GetGeoCorpsDocument = gql`
    query GetGeoCorps {
  getGeoCorps {
    id
    name
    createdAt
    farmLots {
      name
    }
    geographicArea {
      name
      id
    }
    landGroup {
      name
      id
    }
  }
}
    `;

/**
 * __useGetGeoCorpsQuery__
 *
 * To run a query within a React component, call `useGetGeoCorpsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeoCorpsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeoCorpsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGeoCorpsQuery(baseOptions?: Apollo.QueryHookOptions<GetGeoCorpsQuery, GetGeoCorpsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeoCorpsQuery, GetGeoCorpsQueryVariables>(GetGeoCorpsDocument, options);
      }
export function useGetGeoCorpsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeoCorpsQuery, GetGeoCorpsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeoCorpsQuery, GetGeoCorpsQueryVariables>(GetGeoCorpsDocument, options);
        }
export function useGetGeoCorpsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGeoCorpsQuery, GetGeoCorpsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGeoCorpsQuery, GetGeoCorpsQueryVariables>(GetGeoCorpsDocument, options);
        }
export type GetGeoCorpsQueryHookResult = ReturnType<typeof useGetGeoCorpsQuery>;
export type GetGeoCorpsLazyQueryHookResult = ReturnType<typeof useGetGeoCorpsLazyQuery>;
export type GetGeoCorpsSuspenseQueryHookResult = ReturnType<typeof useGetGeoCorpsSuspenseQuery>;
export type GetGeoCorpsQueryResult = Apollo.QueryResult<GetGeoCorpsQuery, GetGeoCorpsQueryVariables>;
export const GetInputCategoriesDocument = gql`
    query GetInputCategories {
  getInputCategories {
    id
    name
  }
}
    `;

/**
 * __useGetInputCategoriesQuery__
 *
 * To run a query within a React component, call `useGetInputCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInputCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInputCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInputCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetInputCategoriesQuery, GetInputCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInputCategoriesQuery, GetInputCategoriesQueryVariables>(GetInputCategoriesDocument, options);
      }
export function useGetInputCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInputCategoriesQuery, GetInputCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInputCategoriesQuery, GetInputCategoriesQueryVariables>(GetInputCategoriesDocument, options);
        }
export function useGetInputCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetInputCategoriesQuery, GetInputCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetInputCategoriesQuery, GetInputCategoriesQueryVariables>(GetInputCategoriesDocument, options);
        }
export type GetInputCategoriesQueryHookResult = ReturnType<typeof useGetInputCategoriesQuery>;
export type GetInputCategoriesLazyQueryHookResult = ReturnType<typeof useGetInputCategoriesLazyQuery>;
export type GetInputCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetInputCategoriesSuspenseQuery>;
export type GetInputCategoriesQueryResult = Apollo.QueryResult<GetInputCategoriesQuery, GetInputCategoriesQueryVariables>;
export const GetLandGroupsDocument = gql`
    query GetLandGroups {
  getLandGroups {
    id
    name
    createdAt
    geographicArea {
      name
      id
    }
    cooperative {
      name
    }
  }
}
    `;

/**
 * __useGetLandGroupsQuery__
 *
 * To run a query within a React component, call `useGetLandGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLandGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLandGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLandGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetLandGroupsQuery, GetLandGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLandGroupsQuery, GetLandGroupsQueryVariables>(GetLandGroupsDocument, options);
      }
export function useGetLandGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLandGroupsQuery, GetLandGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLandGroupsQuery, GetLandGroupsQueryVariables>(GetLandGroupsDocument, options);
        }
export function useGetLandGroupsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLandGroupsQuery, GetLandGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLandGroupsQuery, GetLandGroupsQueryVariables>(GetLandGroupsDocument, options);
        }
export type GetLandGroupsQueryHookResult = ReturnType<typeof useGetLandGroupsQuery>;
export type GetLandGroupsLazyQueryHookResult = ReturnType<typeof useGetLandGroupsLazyQuery>;
export type GetLandGroupsSuspenseQueryHookResult = ReturnType<typeof useGetLandGroupsSuspenseQuery>;
export type GetLandGroupsQueryResult = Apollo.QueryResult<GetLandGroupsQuery, GetLandGroupsQueryVariables>;
export const GetUnitsDocument = gql`
    query GetUnits {
  getUnits {
    id
    unitName
  }
}
    `;

/**
 * __useGetUnitsQuery__
 *
 * To run a query within a React component, call `useGetUnitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUnitsQuery(baseOptions?: Apollo.QueryHookOptions<GetUnitsQuery, GetUnitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnitsQuery, GetUnitsQueryVariables>(GetUnitsDocument, options);
      }
export function useGetUnitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnitsQuery, GetUnitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnitsQuery, GetUnitsQueryVariables>(GetUnitsDocument, options);
        }
export function useGetUnitsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUnitsQuery, GetUnitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUnitsQuery, GetUnitsQueryVariables>(GetUnitsDocument, options);
        }
export type GetUnitsQueryHookResult = ReturnType<typeof useGetUnitsQuery>;
export type GetUnitsLazyQueryHookResult = ReturnType<typeof useGetUnitsLazyQuery>;
export type GetUnitsSuspenseQueryHookResult = ReturnType<typeof useGetUnitsSuspenseQuery>;
export type GetUnitsQueryResult = Apollo.QueryResult<GetUnitsQuery, GetUnitsQueryVariables>;
export const GetUpcomingActivitiesByCooperativeDocument = gql`
    query GetUpcomingActivitiesByCooperative($cooperativeId: String!) {
  getUpcomingActivitiesByCooperative(cooperativeId: $cooperativeId) {
    date
    activitiesForDay {
      farmLotname
      calendarActivity {
        activity {
          name
        }
        startTime
        endTime
      }
    }
  }
}
    `;

/**
 * __useGetUpcomingActivitiesByCooperativeQuery__
 *
 * To run a query within a React component, call `useGetUpcomingActivitiesByCooperativeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpcomingActivitiesByCooperativeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpcomingActivitiesByCooperativeQuery({
 *   variables: {
 *      cooperativeId: // value for 'cooperativeId'
 *   },
 * });
 */
export function useGetUpcomingActivitiesByCooperativeQuery(baseOptions: Apollo.QueryHookOptions<GetUpcomingActivitiesByCooperativeQuery, GetUpcomingActivitiesByCooperativeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUpcomingActivitiesByCooperativeQuery, GetUpcomingActivitiesByCooperativeQueryVariables>(GetUpcomingActivitiesByCooperativeDocument, options);
      }
export function useGetUpcomingActivitiesByCooperativeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpcomingActivitiesByCooperativeQuery, GetUpcomingActivitiesByCooperativeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUpcomingActivitiesByCooperativeQuery, GetUpcomingActivitiesByCooperativeQueryVariables>(GetUpcomingActivitiesByCooperativeDocument, options);
        }
export function useGetUpcomingActivitiesByCooperativeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUpcomingActivitiesByCooperativeQuery, GetUpcomingActivitiesByCooperativeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUpcomingActivitiesByCooperativeQuery, GetUpcomingActivitiesByCooperativeQueryVariables>(GetUpcomingActivitiesByCooperativeDocument, options);
        }
export type GetUpcomingActivitiesByCooperativeQueryHookResult = ReturnType<typeof useGetUpcomingActivitiesByCooperativeQuery>;
export type GetUpcomingActivitiesByCooperativeLazyQueryHookResult = ReturnType<typeof useGetUpcomingActivitiesByCooperativeLazyQuery>;
export type GetUpcomingActivitiesByCooperativeSuspenseQueryHookResult = ReturnType<typeof useGetUpcomingActivitiesByCooperativeSuspenseQuery>;
export type GetUpcomingActivitiesByCooperativeQueryResult = Apollo.QueryResult<GetUpcomingActivitiesByCooperativeQuery, GetUpcomingActivitiesByCooperativeQueryVariables>;