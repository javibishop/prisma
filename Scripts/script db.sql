IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Marcas] (
    [Id] int NOT NULL IDENTITY,
    [Codigo] nvarchar(max) NOT NULL,
    [Nombre] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_Marcas] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [ZonaPrecios] (
    [Id] int NOT NULL IDENTITY,
    [Codigo] nvarchar(max) NOT NULL,
    [Nombre] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_ZonaPrecios] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Competidores] (
    [Id] int NOT NULL IDENTITY,
    [Codigo] nvarchar(max) NOT NULL,
    [Nombre] nvarchar(max) NOT NULL,
    [Calle] nvarchar(max) NULL,
    [Latitud] decimal(18,2) NOT NULL,
    [Longitud] decimal(18,2) NOT NULL,
    [Marcador] bit NOT NULL,
    [Observar] bit NOT NULL,
    [MarcaId] int NOT NULL,
    [ZonaPrecioId] int NOT NULL,
    CONSTRAINT [PK_Competidores] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Competidores_Marcas_MarcaId] FOREIGN KEY ([MarcaId]) REFERENCES [Marcas] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Competidores_ZonaPrecios_ZonaPrecioId] FOREIGN KEY ([ZonaPrecioId]) REFERENCES [ZonaPrecios] ([Id]) ON DELETE CASCADE
);

GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Codigo', N'Nombre') AND [object_id] = OBJECT_ID(N'[Marcas]'))
    SET IDENTITY_INSERT [Marcas] ON;
INSERT INTO [Marcas] ([Id], [Codigo], [Nombre])
VALUES (1, N'CF', N'Carrefour'),
(2, N'CFE', N'Carrefour Express'),
(3, N'CO', N'Coto'),
(4, N'VEA', N'Vea');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Codigo', N'Nombre') AND [object_id] = OBJECT_ID(N'[Marcas]'))
    SET IDENTITY_INSERT [Marcas] OFF;

GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Codigo', N'Nombre') AND [object_id] = OBJECT_ID(N'[ZonaPrecios]'))
    SET IDENTITY_INSERT [ZonaPrecios] ON;
INSERT INTO [ZonaPrecios] ([Id], [Codigo], [Nombre])
VALUES (1, N'N', N'Norte'),
(2, N'S', N'Sur'),
(3, N'E', N'Este'),
(4, N'O', N'Oeste');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Codigo', N'Nombre') AND [object_id] = OBJECT_ID(N'[ZonaPrecios]'))
    SET IDENTITY_INSERT [ZonaPrecios] OFF;

GO

CREATE INDEX [IX_Competidores_MarcaId] ON [Competidores] ([MarcaId]);

GO

CREATE INDEX [IX_Competidores_ZonaPrecioId] ON [Competidores] ([ZonaPrecioId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190718145651_inicial', N'2.2.6-servicing-10079');

GO

