interface DBConnection {
  connect(): void;
}

class MySQLConnection implements DBConnection {
  connect(): void {
  }
}

class PasswordReminder {
  private dbConnection: DBConnection;
  constructor(dbConnection: DBConnection) {
    this.dbConnection = dbConnection;
  }
}